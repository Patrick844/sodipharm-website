// app/api/articles.js

import { NextResponse } from "next/server";
import { pool, pool_uri } from "@/utils/db";

export async function GET() {
  try {
    // const result = await pool.query("SELECT * FROM news");
    const result = await pool_uri.query("SELECT * FROM news");

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error fetching news:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    let { description, date } = await req.json();
    const query = `
    INSERT INTO news(description, date)
    VALUES($1, $2)`; // Use RETURNING * to get inserted data back if needed

    // const result = await pool.query(query, [description, date]);
    const result = await pool_uri.query(query, [description, date]);
    return NextResponse.json(
      { message: "success" },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (err) {
    console.error("Error fetching news:", err);
    return NextResponse.json(
      { error: "Server Error" },
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
