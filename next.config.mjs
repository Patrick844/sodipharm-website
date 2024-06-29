// next.config.js
import { defineConfig } from "next";

const config = defineConfig({
  env: {
    DB_URI: process.env.DB_URI,
    DB_CA: process.env.DB_CA,
  },
});

export default config;
