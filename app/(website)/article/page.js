"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchData();
  }, []);
  const article_obj = articles.map((article, index) => (
    <div className="px-5 mx-2 sm:my-5 sm:mx-4 flex-col sm:h-14 sm:mt-10 mt-12 shadow-md shadow-gray-300 border-1 border-solid border-black bg-gray-100 rounded-md flex sm:flex-row sm:items-center sm:justify-evenly">
      <div className="text-center">
        <span className="font-bold pr-3">Title:</span> {article.title}
      </div>
      <div className="text-center">
        <a href="www.google.com" className="text-blue-500 hover:underline">
          {article.url}
        </a>
      </div>
      <div className="text-center">
        <span className="font-bold pr-3">keywords:</span> {article.keywords}
      </div>
    </div>
  ));
  console.log(article_obj);
  return (
    <div>
      <h1 className="sm:mt-16 mt-14  pt-4 sm:text-6xl text-3xl font-bold text-center">
        Articles
      </h1>

      <div className="sm:flex sm:flex-col sm:justify-between"></div>
      {article_obj}
    </div>
  );
};

export default ArticlesPage;
