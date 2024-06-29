// app/api/articles.js

import { NextResponse } from "next/server";
import pool from "@/utils/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM articles articles limit 4");
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error fetching articles:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
