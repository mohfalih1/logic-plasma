import axios from "axios";
import router from "@/router";

const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (e) => {
    if (e.response.status === 401) {
      router.push("/login");
    }
    if (e.response.status === 403) {
      router.push("/login");
    }
    return Promise.reject(e);
  }
);
var token = localStorage.getItem("token");
axiosInstance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    config.baseURL = "https://plasma-api.digital-logic.tech/api/";
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
