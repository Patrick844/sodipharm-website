import { NextResponse } from "next/server";
import { pool, pool_uri } from "@/utils/db";
import cors from "@/utils/cors";

export async function PUT(req, { params }) {
  await cors(req);
  const { id } = params;
  const { title, url, keywords } = await req.json();
  try {
    // const result = await pool.query(
    //   "UPDATE articles SET title = $1, url = $2, keywords = $3 WHERE id = $4 RETURNING *",
    //   [title, url, keywords, id]
    // );
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
    return NextResponse.error(error.message, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
}

export async function DELETE(req, { params }) {
  await cors(req);
  const { id } = params;
  try {
    // await pool.query("DELETE FROM articles WHERE id = $1", [id]);
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
    return NextResponse.error(error.message, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
}
