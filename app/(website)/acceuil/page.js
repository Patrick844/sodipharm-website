"use client";
import Main from "@/components/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "@/components/Cards";
import News from "@/components/News";

export default function Page() {
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log("test home");

    const fetchArticles = async () => {
      console.log("Fetching articles...");
      try {
        const response = await axios.get("/api/articles");
        console.log("Articles fetched:", response.data);
        setArticles(() => {
          const data = response.data.slice(0, 4);
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
      console.log("Fetching news...");
      try {
        const response = await axios.get("/api/news");
        console.log("News fetched:", response.data);
        setNews(() => {
          const data = response.data.slice(0, 4);
          const news_obj = data.map((item, index) => (
            <News key={index} props={item} />
          ));
          return news_obj;
        });
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticles();
    fetchNews();
  }, []);

  useEffect(() => {
    console.log("Articles state updated:", articles);
  }, [articles]);

  useEffect(() => {
    console.log("News state updated:", news);
  }, [news]);

  return (
    <div>
      <Main />
      <div className="text-center flex justify-center items-center my-8">
        <hr className="w-1/4 border-t-2 border-gray-300 my-4" />
        <p className="inline text-5xl px-4 ">News</p>
        <hr className="w-1/4 border-t-2 border-gray-300 my-4" />
      </div>
      <div className="flex flex-col ml-10 sm:ml-40 justify-evenly mb-7">
        {news}
      </div>
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
