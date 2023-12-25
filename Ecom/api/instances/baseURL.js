import axios from "axios";

export const baseURL = axios.create({
  baseURL: "http://10.0.2.2:5000/mobile",
  headers: {
    "Content-type": "application/json",
  },
  timeout: 10000,
});
