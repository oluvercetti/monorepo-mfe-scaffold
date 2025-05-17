import axios from "axios";
import { COOKIE_NAMES } from "../constants";
import { getCookie, deleteCookie } from "./cookies";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const repoAxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
repoAxiosInstance.interceptors.request.use(
  async (config) => {
    if (await isTokenExpired()) {
      console.warn("Token expired. Logging out user.");
      await logoutUser();
      return Promise.reject(
        new Error("Session expired. Please sign in again.")
      );
    }

    const token = getCookie(COOKIE_NAMES.SESSION);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) =>
    Promise.reject(
      new Error(
        error.response?.data?.message ??
          "Something went wrong. Please try again."
      )
    )
);

// Response interceptor
repoAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const token = getCookie(COOKIE_NAMES.SESSION);
    // Handle common error cases
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          if (token) {
            await logoutUser();
          }
          break;
        case 403:
          // Handle forbidden
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server error
          break;
      }
    }
    return Promise.reject(
      new Error(
        error.response?.data?.message ??
          "Something went wrong. Please try again."
      )
    );
  }
);

interface DecodedToken {
  exp: number;
}

// Function to check if the token is expired
async function isTokenExpired(): Promise<boolean> {
  const token = getCookie(COOKIE_NAMES.SESSION);
  if (!token) return false;

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp < currentTime;
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
}

async function logoutUser() {
  deleteCookie(COOKIE_NAMES.SESSION);
  deleteCookie(COOKIE_NAMES.REFRESH_TOKEN);

  redirect("/sign-in");
}
