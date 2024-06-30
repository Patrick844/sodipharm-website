import { pool_uri } from "@/utils/db";
import { NextResponse } from "next/server";
import cors from "@/utils/cors";

export async function POST(req, res) {
  const { username, password } = await req.json();

  try {
    const corsResponse = cors(req);
    if (req.method === "OPTIONS") {
      return corsResponse;
    }

    const result = await pool_uri.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
    }

    const user = result.rows[0];

    // Simplified password comparison for demo purposes (not secure)
    const isValidPassword = user.password === password;

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
    }

    // Successful login
    const response = NextResponse.redirect(
      process.env.NEXT_PUBLIC_URL + "/admin/dashbord/main",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );

    // Set the auth-token cookie
    response.cookies.set("auth-token", user.id, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  }
}

function cors(req) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}
