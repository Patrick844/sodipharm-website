// app/api/articles.js

import { NextResponse } from "next/server";
import { pool, pool_uri } from "@/utils/db";

export async function GET() {
  try {
    // const result = await pool.query("SELECT * FROM news limit 4");
    const result = await pool_uri.query("SELECT * FROM news limit 4");

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error fetching articles:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
