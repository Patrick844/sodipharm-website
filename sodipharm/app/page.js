"use client";
import Navbar from "@/components/NavBar";
import Main from "@/components/Main";
import { useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost/api/articles");
        console.log(response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}
