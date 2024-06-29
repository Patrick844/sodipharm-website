"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ArticleTable from "@/components/ArticleTable";

const UpdateDeletePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get("http://localhost:3000/api/articles");
        setArticles(result.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/articles/${id}`);
      setArticles(articles.filter((article) => article.id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleUpdate = (id, field, value) => {
    setArticles(
      articles.map((article) =>
        article.id === id ? { ...article, [field]: value } : article
      )
    );
  };

  const handleSave = async (id) => {
    const article = articles.find((article) => article.id === id);
    try {
      await axios.put(`http://localhost:3000/api/articles/${id}`, article);
      alert("Article updated successfully!");
    } catch (error) {
      console.error("Error saving updates:", error);
    }
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Update/Delete Articles</h1>
      <ArticleTable
        articles={articles}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleSave={handleSave}
      />
    </div>
  );
};

export default UpdateDeletePage;
