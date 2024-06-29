// utils/db.js
import { Pool } from "pg";
import dotenv from "dotenv";
const fs = require("fs");

dotenv.config();
export const pool = new Pool({
  user: process.env.NEXT_PUB > LIC_DBUSER,
  host: process.env.NEXT_PUB > LIC_DBHOST,
  database: process.env.NEXT_PUB > LIC_DBNAME,
  password: process.env.NEXT_PUB > LIC_DBPASSWORD,
  port: process.env.NEXT_PUB > LIC_DBPORT,
  ssl: {
    rejectUnauthorized:
      process.env.NEXT_PUB > LIC_DBSSL_REJECT_UNAUTHORIZED === "true",
    ca: process.env.NEXT_PUB > LIC_DBSSL_CA,
  },
});
export const pool_uri = new Pool({
  connectionString: process.env.NEXT_PUB > LIC_DBURI,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.NEXT_PUB > LIC_DBCA,
  },
});
