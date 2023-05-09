"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/slices/productSlice";
import AffFlashSalesPage from "@/components/affFlashSales";
export default function FlashSalesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <AffFlashSalesPage />
    </div>
  );
}
