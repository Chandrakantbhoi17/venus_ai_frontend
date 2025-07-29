// services/apiClient.jsx
import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to every request if available
apiClient.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const setAuthToken = (token) => {
  Cookies.set("token", token, { expires: 7 });
};

export const clearAuthToken = () => {
  Cookies.remove("token");
};

export default apiClient;
