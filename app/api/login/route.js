import { compare } from "bcrypt";
import { pool, pool_uri, client } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { username, password } = await req.json();

  try {
    // const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    //   username,
    // ]);
    console.log("login");

    try {
      await pool_uri.connect();
      console.log("Connected to PostgreSQL database on Aiven");
      // Perform database operations here
    } catch (err) {
      console.error("Error connecting to PostgreSQL:", err.message);
    }
    const result = await pool_uri.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

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
