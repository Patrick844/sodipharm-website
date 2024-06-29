import { NextResponse } from "next/server";
import pool from "@/utils/db";

export async function PUT(req, { params }) {
  const { id } = params;
  const { description, date } = await req.json();
  try {
    const result = await pool.query(
      "UPDATE news SET description = $1, date = $2 WHERE id = $3 RETURNING *",
      [description, date, id]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await pool.query("DELETE FROM news WHERE id = $1", [id]);
    return NextResponse.json({ message: "news deleted successfully" });
  } catch (error) {
    return NextResponse.error(error.message);
  }
}
