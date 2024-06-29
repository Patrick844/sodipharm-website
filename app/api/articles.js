// app/api/articles.js

import { NextResponse } from "next/server";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM article");
    client.release();
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error fetching articles:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
