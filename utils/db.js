// utils/db.js
import { Pool } from "pg";
import dotenv from "dotenv";
const fs = require("fs");

dotenv.config();
export const pool = new Pool({
  user: process.env.NEXT_PUBLIC_DB_USER,
  host: process.env.NEXT_PUBLIC_DB_HOST,
  database: process.env.NEXT_PUBLIC_DB_NAME,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  port: process.env.NEXT_PUBLIC_DB_PORT,
  ssl: {
    rejectUnauthorized:
      process.env.NEXT_PUBLIC_DB_SSL_REJECT_UNAUTHORIZED === "true",
    ca: process.env.NEXT_PUBLIC_DB_SSL_CA,
  },
});
export const pool_uri = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DB_URI,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.NEXT_PUBLIC_DB_CA,
  },
});
