import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";
import { getAllProducts } from "./services";

const initialState: IInitialState = {
  products: {
    items: [],
    page: 0,
    size: 0,
    total: 1,
    pages: 1,
    next_page: null,
    previous_page: null,
  },
  loadingProducts: false,
};

const productSlice = createSlice({
  name: "products-slice",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAllProducts.pending, (state) => {
      state.loadingProducts = true;
    });
    addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.loadingProducts = false;
      state.products = payload!;
    });
  },
});

export default productSlice.reducer;
