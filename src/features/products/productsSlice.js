import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../app/services/products";

const initialState = {
  sortProducts: null,
  listProducts: null,
  trubProducts: null,
};

const sortSlice = createSlice({
  name: "sortProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getSortProducts.matchFulfilled,
      (state, action) => {
        state.sortProducts = action.payload;
      }
    );
  },
});

const listSlice = createSlice({
  name: "listProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getListProducts.matchFulfilled,
      (state, action) => {
        state.listProducts = action.payload;
      }
    );
  },
});

const trubSlice = createSlice({
  name: "trubProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getTrubProducts.matchFulfilled,
      (state, action) => {
        state.trubProducts = action.payload;
      }
    );
  },
});

export const selectSortProducts = (state) => state.sortProducts.sortProducts;
export const selectListProducts = (state) => state.listProducts.listProducts;
export const selectTrubProducts = (state) => state.trubProducts.trubProducts;

export default {
  sort: sortSlice.reducer,
  list: listSlice.reducer,
  trub: trubSlice.reducer,
};
