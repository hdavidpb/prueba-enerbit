import axios from "axios";

export const rest = axios.create({
  baseURL: "https://ops.enerbit.dev/learning/api/v1/meters",
});
