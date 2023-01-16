import { createAsyncThunk } from "@reduxjs/toolkit";
import { rest } from "../../../rest/rest";
import { errorAlert } from "../../../utils/utils";
import { IGetProductsParams, ProductResponse } from "./interface";

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async ({ page, serial, size }: IGetProductsParams) => {
    const PARAMS = `?page=${page ? page : 0}${
      serial ? "&serial=" + serial : ""
    }${size ? "&size=" + size : "&size=10"}`;

    try {
      const response = await rest.get<ProductResponse>(PARAMS);
      return response.data;
    } catch (error) {
      errorAlert(JSON.stringify(error));
    }
  }
);
