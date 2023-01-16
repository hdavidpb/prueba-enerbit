import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, Item } from "./interface";
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
  reducers: {
    selectProduct: (state, action: PayloadAction<Item>) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = initialState.selectedProduct;
    },
  },
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

export const { selectProduct, clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
