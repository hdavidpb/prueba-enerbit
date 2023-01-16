import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../rest/rest";
import { errorAlert, succesAlert } from "../../../utils/utils";
import {
  IGetProductsParams,
  Item,
  ItemForm,
  ProductResponse,
} from "./interface";

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async ({ page, serial, size }: IGetProductsParams) => {
    const PARAMS = `?page=${page ? page : 0}${
      serial ? "&serial=" + serial : ""
    }${size ? "&size=" + size : "&size=10"}`;

    try {
      const response = await rest.get<ProductResponse>(PARAMS);

      return response.data;
    } catch (error: any) {
      errorAlert(error.response.data.detail);
    }
  }
);

export const filterBySerial = createAsyncThunk(
  "filterBySerial",
  async (serial: string) => {
    try {
      const response = await rest.get<ProductResponse>(`?serial=${serial}`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      errorAlert(error.response.data.detail);
    }
  }
);

export const getProductById = createAsyncThunk(
  "getProductById",
  async (id: number) => {
    try {
      const response = await rest.get<Item>(`/${id}`);

      return response.data;
    } catch (error: any) {
      errorAlert(error.response.data.detail);
    }
  }
);

export const createProduct = createAsyncThunk(
  "createProduct",
  async (product: ItemForm) => {
    try {
      const response = await rest.post<Item>("", product);
      succesAlert("Product created successfully");
      return response.data;
    } catch (error) {
      errorAlert(JSON.stringify(error));
    }
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ product, productId }: { product: ItemForm; productId: number }) => {
    try {
      const response = await rest.patch<Item>(`/${productId}`, product);
      succesAlert("Product updated successfully");
      console.log(response.data);
      return response.data;
    } catch (error) {
      errorAlert(JSON.stringify(error));
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (productId: number) => {
    try {
      const response = await rest.delete<Item>(`/${productId}`);

      return response.data;
    } catch (error) {
      errorAlert(JSON.stringify(error));
    }
  }
);
