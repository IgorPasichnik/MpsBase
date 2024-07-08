import { createSlice } from "@reduxjs/toolkit";
import { productionsApi } from "../../app/services/productions";

const initialState = {
  restorationProductions: null,
};

const restorationSlice = createSlice({
  name: "restorationProductions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productionsApi.endpoints.getRestorationProductions.matchFulfilled,
      (state, action) => {
        state.restorationProductions = action.payload;
      }
    );
  },
});

export const selectRestorationProductions = (state) =>
  state.restorationProductions.restorationProductions;

export default {
  restoration: restorationSlice.reducer,
};
