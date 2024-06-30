// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("auth-token");
  console.log("middleware");

  // Check if the request is for a protected route
  if (url.pathname.startsWith("/admin/dashbord/main") && !token) {
    // Redirect to the login page if not authenticated
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  // Allow the request to continue if authenticated or not a protected route
  return NextResponse.next();
}

// Specify the paths to be protected
export const config = {
  matcher: ["/admin/dashbord/:path(.*)"],
};
