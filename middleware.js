import { NextResponse } from "next/server";

export function middleware(req) {
  try {
    const url = req.nextUrl.clone();
    const token = req.cookies.get("auth-token");
    console.log("middleware");
    console.log(token);
    console.warn(token);

    // Check if the request is for a protected route
    if (url.pathname.startsWith("/admin/dashbord/main") && !token) {
      console.warn("here");
      // Redirect to the login page if not authenticated
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }

    // Allow the request to continue if authenticated or not a protected route
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    // Handle the error or return a default response
    return NextResponse.error();
  }
}

// Specify the paths to be protected
export const config = {
  matcher: ["/admin/dashbord/:path(.*)"],
};
