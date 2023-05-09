"use client";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
const CartProductItem = ({ product }) => {
  const { addItem } = useShoppingCart();

  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const addToCart = () => {
    addItem(product, { count: quantity });
    setQuantity(1);
  };
  return (
    <article
      className="flex flex-col gap-3 bg-white rounded-xl shadow-md
text-center mb-6"
    >
      <div className="text-8xl cursor-default">
        <img
          src={product?.images[0]}
          className="card-img-top p-5"
          alt={product.title}
        />
      </div>
      <div className="text-lg">{product.title}</div>
      <div className="text-2xl font-semibold mt-auto">{product.price} $ </div>
      <div className="flex justify-around items-center mt-4 mb-2 ">
        <button
          onClick={decreaseQuantity}
          className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8
rounded-full transition-colors duration-500"
        >
          -
        </button>
        <span className="w-10 text-center rounded-md mx-3">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8
rounded-full transition-colors duration-500"
        >
          +
        </button>
      </div>
      <button
        onClick={() => addToCart()}
        className="bg-emerald-50 hover:bg-emerald-500 hover:text-white
transition-colors duration-500 text-emerald-500 rounded-md px-5 py-2"
      >
        Add to cart
      </button>
    </article>
  );
};
export default CartProductItem;
