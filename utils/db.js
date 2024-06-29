// utils/db.js
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DB_SSL_CA);
const pool = new Pool({
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

export default pool;
