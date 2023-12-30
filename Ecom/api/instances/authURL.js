import axios from "axios";

export const authURL = (token) =>
  axios.create({
    baseURL: "http://192.168.0.110:5000/mobile",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    timeout: 10000,
  });
