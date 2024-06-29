// app/api/articles.js

import { NextResponse } from "next/server";
import pool from "@/utils/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM news");

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

    const result = await pool.query(query, [description, date]);
    return NextResponse.json({ message: "success" });
  } catch (err) {
    console.error("Error fetching news:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
