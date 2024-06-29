import { compare } from "bcrypt";
import { pool, pool_uri } from "@/utils/db";
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
    console.log("t");

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    const isValidPassword = user.password === password;

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Successful login
    return NextResponse.json({ message: "Login successful", success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
