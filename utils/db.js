// utils/db.js
import { Pool, Client } from "pg";
import dotenv from "dotenv";
const fs = require("fs");

dotenv.config();

export const pool_uri = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DB_URI,
});
