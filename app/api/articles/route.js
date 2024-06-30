// app/api/articles.js

import { NextResponse } from "next/server";
import { pool, pool_uri } from "@/utils/db";

export async function GET() {
  try {
    // const result = await pool.query("SELECT * FROM articles");
    const result = await pool_uri.query("SELECT * FROM articles");

    return NextResponse.json(result.rows, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    console.error("Error fetching articles:", err);
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

export async function POST(req, res) {
  try {
    let { title, url, keywords } = await req.json();
    if (keywords === "") {
      keywords = null;
    }

    console.log("t");

    const query = `
    INSERT INTO articles(title, url, keywords)
    VALUES($1, $2, $3)`; // Use RETURNING * to get inserted data back if needed
    console.log(query);

    // const result = await pool.query(query, [title, url, keywords]);
    const result = await pool_uri.query(query, [title, url, keywords]);

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
    console.error("Error fetching articles:", err);
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
