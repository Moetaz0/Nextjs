import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
export default function CartItem({ item }) {
  const { title, images, quantity, price } = item;
  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id);
  };
  return (
    <div className="flex items-center gap-4 mb-3">
      <p>
        <img src={images[0]} width={40} height={40} alt={title} />
      </p>
      <div>
        {title} <span className="text-xs">({quantity})</span>
      </div>
      <div className="ml-auto">{price}$</div>
      <button
        onClick={() => removeItemFromCart()}
        className="hover:bg-emerald-50 transition-colors rounded-full duration500 p-1"
      >
        <Image
          alt="delete icon"
          src="/images/trash.png"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
}
