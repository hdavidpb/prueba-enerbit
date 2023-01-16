import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, Item } from "./interface";
import {
  createProduct,
  deleteProduct,
  filterBySerial,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./services";

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
      if (payload === undefined) {
        state.products = initialState.products;
        return;
      }

      state.products = payload!;
    });
    addCase(getProductById.fulfilled, (state, { payload }) => {
      state.selectedProduct = payload!;
    });
    addCase(createProduct.pending, (state) => {
      state.loadingProducts = true;
    });
    addCase(filterBySerial.pending, (state) => {
      state.loadingProducts = true;
    });
    addCase(filterBySerial.fulfilled, (state, { payload }) => {
      state.loadingProducts = false;

      if (payload === undefined) {
        return;
      }

      state.products = payload;
    });
    addCase(createProduct.fulfilled, (state) => {
      state.loadingProducts = false;
    });
    addCase(updateProduct.pending, (state) => {
      state.loadingProducts = true;
    });
    addCase(updateProduct.fulfilled, (state, { payload }) => {
      state.loadingProducts = false;
      const newItems = state.products.items.map((item) => {
        if (item.id === payload?.id) {
          return { ...payload };
        } else {
          return { ...item };
        }
      });
      state.products.items = newItems;
      state.selectedProduct = initialState.selectedProduct;
    });
    addCase(deleteProduct.pending, (state) => {
      state.loadingProducts = true;
    });
    addCase(deleteProduct.fulfilled, (state, { payload }) => {
      state.loadingProducts = false;
      state.products.items = state.products.items.filter(
        (item) => item.id !== payload!.id
      );
    });
  },
});

export const { clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
