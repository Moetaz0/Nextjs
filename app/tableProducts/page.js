import React from "react";
import dynamic from "next/dynamic";
const AffTableProducts = dynamic(
  () => import("@/components/affTableProducts"),
  {
    
    ssr: false,
  }
);
async function getProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await res.json();
  return products;
}
const tableProducts = async () => {
  const products = await getProducts();
  return (
    <div className="container mx-auto shadow p-4">
      <AffTableProducts products={products} />
    </div>
  )
}
export default tableProducts;
