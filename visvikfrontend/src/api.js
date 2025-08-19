import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // env se lega
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;