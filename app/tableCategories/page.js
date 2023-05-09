import React from "react";
import dynamic from "next/dynamic";
const AffTableCategories = dynamic(
  () => import("@/components/AffTableCategories"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
);
async function getProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories = await res.json();
  return categories;
}
const tableCategories = async () => {
  const categories = await getProducts();
  return (
    <div className="container mx-auto shadow p-4">
      <AffTableCategories categories={categories} />
    </div>
  );
};
export default tableCategories;
