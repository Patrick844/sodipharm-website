"use client";
import Navbar from "@/components/NavBar";
import Main from "@/components/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "@/components/Cards";
import News from "@/components/News";

export default function HomePage() {
  const [articles, setArticles] = useState("");
  const [news, setnews] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_URL + "api/articlesMain"
        );
        setArticles(() => {
          const data = response.data;
          const articles_obj = data.map((article, index) => (
            <Cards key={index} props={article} />
          ));
          return articles_obj;
        });
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_URL + "api/newsMain"
        );
        setnews(() => {
          const data = response.data;
          const news_obj = data.map((item, index) => (
            <News key={index} props={item} />
          ));
          return news_obj;
        });
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    console.log(articles);

    fetchArticles();
    fetchNews();
  }, []);

  return (
    <div>
      <Main />
      <div className="text-center flex justify-center items-center my-8">
        <hr className="w-1/4 border-t-2 border-gray-300 my-4" />
        <p className="inline text-5xl px-4 ">News</p>
        <hr className="w-1/4 border-t-2 border-gray-300 my-4" />
      </div>
      <div className="flex flex-col ml-10  sm:ml-40 justify-evenly mb-7">
        {news}
      </div>
      <div className="flex justify-evenly mb-7"></div>
      <div className="text-center flex justify-center items-center my-8">
        <hr className="w-1/4 border-t-2 border-gray-300 my-4" />
        <p className="inline text-5xl px-4 ">Articles</p>
        <hr className="w-1/4 border-t-2 border-gray-300 my-4" />
      </div>
      <div className="flex flex-col sm:flex-row px-3 sm:justify-evenly mb-7">
        {articles}
      </div>
    </div>
  );
}
