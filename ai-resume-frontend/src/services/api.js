import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // optional (for auth later)
});

console.log("API URL:", import.meta.env.VITE_API_URL); // 👈 ADD THIS

// 🔐 Attach token automatically (if using JWT)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;