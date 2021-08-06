import axios from "axios";
import env from "@/configs/env";

export const ApiService = axios.create({
  baseURL: env.apiURL,
  timeout: 3000,
});
