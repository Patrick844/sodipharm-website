/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();
const nextConfig = {
  env: {
    DB_URI: process.env.DB_URI,
    DB_CA: process.env.DB_CA,
  },
};

module.exports = nextConfig;
