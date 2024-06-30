// utils/db.js
import { Pool, Client } from "pg";
export const pool_uri = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DB_URI,
});
