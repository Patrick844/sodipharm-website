import { NextResponse } from "next/server";
import { pool, pool_uri } from "@/utils/db";
import cors from "@/utils/cors";

export async function PUT(req, { params }) {
  const corsResponse = cors(req);
  if (req.method === "OPTIONS") {
    return corsResponse;
  }

  const { id } = params;
  const { title, url, keywords } = await req.json();

  try {
    const result = await pool_uri.query(
      "UPDATE articles SET title = $1, url = $2, keywords = $3 WHERE id = $4 RETURNING *",
      [title, url, keywords, id]
    );
    return NextResponse.json(
      { message: result.rows[0] },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
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
    await pool_uri.query("DELETE FROM articles WHERE id = $1", [id]);
    return NextResponse.json(
      { message: "Article deleted successfully" },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  }
}
