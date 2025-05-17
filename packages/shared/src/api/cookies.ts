// Client-side cookie utility functions
import Cookies from "js-cookie";

/**
 * Gets the value of a cookie.
 * @param key - The cookie key to retrieve.
 * @returns The cookie value if found.
 */
export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

/**
 * Sets a cookie.
 * @param key - The cookie key.
 * @param value - The value to set.
 */
export const setCookie = (key: string, value: string): void => {
  Cookies.set(key, value, {
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
};

/**
 * Deletes a cookie.
 * @param key - The cookie key to delete.
 */
export const deleteCookie = (key: string): void => {
  Cookies.remove(key, { path: "/" });
};
