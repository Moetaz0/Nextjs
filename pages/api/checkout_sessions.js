const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
  const items = req.body;
  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
        images: [item.images[0]],
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));
  console.log(transformedItems);
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: transformedItems,
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      });
      res.status(200).json({ sessionURL: session.url });
      console.log(res);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
