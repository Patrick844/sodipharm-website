// app/api/articles.js

import { NextResponse } from "next/server";
import pool from "@/utils/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM articles");

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error fetching articles:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    let { title, url, keywords } = await req.json();
    if (keywords === "") {
      keywords = null;
    }
    const query = `
    INSERT INTO articles(title, url, keywords)
    VALUES($1, $2, $3)`; // Use RETURNING * to get inserted data back if needed

    const result = await pool.query(query, [title, url, keywords]);
    return NextResponse.json({ message: "success" });
  } catch (err) {
    console.error("Error fetching articles:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
