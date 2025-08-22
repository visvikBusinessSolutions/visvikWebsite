import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ vite env variable
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
