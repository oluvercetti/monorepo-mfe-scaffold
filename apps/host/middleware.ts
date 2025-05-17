import { COOKIE_NAMES } from "@repo/shared";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Array of public routes that don't require authentication
const publicRoutes = ["/login"];
const DEFAULT_LOGIN_REDIRECT = "/admin";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Check if the current path is a public route or starts with /sign-up
  const isAuthRoute =
    publicRoutes.includes(pathname) || pathname.startsWith("/login");

  // Get the session token from cookies
  const sessionToken = request.cookies.get(COOKIE_NAMES.SESSION);
  const isAuthenticated = !!sessionToken?.value;

  // If user is authenticated and trying to access auth routes (sign-in/sign-up)
  // redirect them to dashboard
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
  }

  // If user is not authenticated and trying to access a protected route
  // redirect them to sign-in page
  if (!isAuthenticated && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // Allow the request to continue
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    "/((?!api|_next|public|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico)$).*)",
  ],
};
