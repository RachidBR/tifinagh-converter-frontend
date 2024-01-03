import axios from "axios";

const axiosMockClient = axios.create({
  baseURL: "http://localhost:3004",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosMockClient;