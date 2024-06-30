import { compare } from "bcrypt";
import { pool, pool_uri, client } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { username, password } = await req.json();

  try {
    // const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    //   username,
    // ]);

    const result = await pool_uri.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    console.log("result ", result);

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
    const response = NextResponse.json(
      { message: "Logged in successfully" },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );

    // Set the auth-token cookie

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
