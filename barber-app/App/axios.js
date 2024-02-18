import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://06a4-185-171-63-96.ngrok-free.app",
});

export default axiosClient;
