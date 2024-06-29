// utils/db.js
import { Pool } from "pg";
import dotenv from "dotenv";
const fs = require("fs");

dotenv.config();
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === "true",
    ca: process.env.DB_SSL_CA,
  },
});
export const pool_uri = new Pool({
  connectionString: process.env.DB_URI,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.DB_CA,
  },
});
