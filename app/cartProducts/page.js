import React from "react";
import CartProductList from "@/components/CartProductList";
async function getProducts() {
  //
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await res.json();
  return products;
}
const CartProductsPage = async () => {
  const products = await getProducts();
  return (
    <>
      <CartProductList products={products} />
    </>
  );
};
export default CartProductsPage;
