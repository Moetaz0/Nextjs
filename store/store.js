import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
export function makestore() {
  return configureStore({
    reducer: {
      product: productReducer,
    },
  });
}
export const store = makestore();
