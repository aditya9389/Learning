// api.js or axiosInstance.js

import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  // You can add default headers if needed:
  // headers: { 'Content-Type': 'application/json' }
});

export default AxiosInstance;
