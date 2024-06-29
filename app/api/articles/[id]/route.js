import { NextResponse } from "next/server";
import pool from "@/utils/db";

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, url, keywords } = await req.json();
  try {
    const result = await pool.query(
      "UPDATE articles SET title = $1, url = $2, keywords = $3 WHERE id = $4 RETURNING *",
      [title, url, keywords, id]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await pool.query("DELETE FROM articles WHERE id = $1", [id]);
    return NextResponse.json({ message: "Article deleted successfully" });
  } catch (error) {
    return NextResponse.error(error.message);
  }
}
