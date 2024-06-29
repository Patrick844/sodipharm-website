/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: process.env.DB_URI,
    DB_CA: process.env.DB_CA,
  },
};

require("dotenv").config();

module.exports = nextConfig;
