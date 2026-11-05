import { NextRequest, NextResponse } from "next/server";
import { PAGES } from "./config/pages-class.config";
import { jwtVerify } from "jose";
import { IAuthPayLoad } from "@/shared/types/auth/authPayLoad.interface";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

function redirectToLogin(request: NextRequest, pathname: string) {
  const loginUrl = new URL(PAGES.LOGIN, request.url);
  loginUrl.searchParams.set("from", pathname);

  const response = NextResponse.redirect(loginUrl);
  response.cookies.delete("access_token");
  return response;
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  const protectedRouters = [PAGES.CART, PAGES.PROFILE, PAGES.ADMIN];
  const isProtectedRoute = protectedRouters.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtectedRoute && !token) {
    return redirectToLogin(request, pathname);
  }

  if (isProtectedRoute && token) {
    try {
      const { payload } = await jwtVerify(token!, JWT_SECRET);
      const customPayload = payload as unknown as IAuthPayLoad;
      if (
        pathname.startsWith(PAGES.ADMIN) &&
        customPayload.user.role !== "ADMIN"
      ) {
        return NextResponse.redirect(new URL(PAGES.HOME, request.url));
      }
    } catch (err) {
      console.error("JWT verification failed:", err);
      return redirectToLogin(request, pathname);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart/:path*", "/profile/:path*", "/admin/:path*"],
};
