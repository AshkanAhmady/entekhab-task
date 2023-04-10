import axios, { AxiosError } from "axios";
import { BASE_URL } from "./api.endpoint";

const http = axios.create({
  baseURL: BASE_URL,
  timeout: +process.env.API_TIMEOUT!,
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => Promise.reject(error)
);

export default http;
