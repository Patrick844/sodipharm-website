import { NextResponse } from "next/server";
import { pool, pool_uri } from "@/utils/db";
import cors from "@/utils/cors";

export async function PUT(req, { params }) {
  const { id } = params;
  const { description, date } = await req.json();
  try {
    const corsResponse = cors(req);
    if (req.method === "OPTIONS") {
      return corsResponse;
    }
    // const result = await pool.query(
    //   "UPDATE news SET description = $1, date = $2 WHERE id = $3 RETURNING *",
    //   [description, date, id]
    // );
    const result = await pool_uri.query(
      "UPDATE news SET description = $1, date = $2 WHERE id = $3 RETURNING *",
      [description, date, id]
    );
    return NextResponse.json(result.rows[0], {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
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

export async function DELETE(req, { params }) {
  const corsResponse = cors(req);
  if (req.method === "OPTIONS") {
    return corsResponse;
  }
  const { id } = params;
  try {
    // await pool.query("DELETE FROM news WHERE id = $1", [id]);
    await pool_uri.query("DELETE FROM news WHERE id = $1", [id]);

    return NextResponse.json({ message: "news deleted successfully" });
  } catch (error) {
    return NextResponse.error(error.message);
  }
}
