import axios from "axios";

export const baseURL = axios.create({
  baseURL: "http://192.168.0.110:5000/mobile",
  headers: {
    "Content-type": "application/json",
  },
  timeout: 10000,
});
