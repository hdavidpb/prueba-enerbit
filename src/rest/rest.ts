import axios from "axios";

export const rest = axios.create({
  baseURL: import.meta.env.VITE_API,
});
