import axios from "axios";
import Cookies from "js-cookie"; // Install with: npm i js-cookie

export const base_url = "https://carrental-150p.onrender.com"; // Replace with actual URL

// Utility to get token from cookies
function getTokenFromCookie(): string | null {
  return Cookies.get("auth_token") || null;
}

// Open API (no token needed)
export const open_api = axios.create({
  baseURL: base_url,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Authenticated API
export const token_api = axios.create({
  baseURL: base_url,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include token
token_api.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (optional)
token_api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove("auth_token");
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
