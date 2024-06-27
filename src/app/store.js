import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import productsSlice from "../features/products/productsSlice";
import productionsSlice from "../features/productions/productionsSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    productsSlice,
    productionsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
