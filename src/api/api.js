import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:8000/api",   // your Laravel backend URL
  baseURL: "https://bookingservice.irfandev.xyz/api",   // your Laravel backend URL
});
