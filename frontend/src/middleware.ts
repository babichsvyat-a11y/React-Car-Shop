import { NextRequest, NextResponse } from "next/server";
import { PAGES } from "./config/pages-class.config";
import { jwtVerify } from "jose";
import { IAuthPayLoad } from "@/shared/types/auth/authPayLoad.interface";

const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const JWT_SECRET = new TextEncoder().encode(secretKey);

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

  if (!token) {
    return redirectToLogin(request, pathname);
  }

  try {
    const { payload } = await jwtVerify<IAuthPayLoad>(token, JWT_SECRET);

    const isAdminRoute =
      pathname === PAGES.ADMIN || pathname.startsWith(`${PAGES.ADMIN}/`);

    if (isAdminRoute && payload.role !== "ADMIN") {
      return NextResponse.redirect(new URL(PAGES.HOME, request.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return redirectToLogin(request, pathname);
  }
}

export const config = {
  matcher: ["/cart/:path*", "/profile/:path*", "/admin/:path*"],
};
