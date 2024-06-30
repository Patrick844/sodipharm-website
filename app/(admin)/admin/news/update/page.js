"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import NewsTable from "@/components/NewsTable";

const UpdateDeletePage = () => {
  const [news, setnews] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(
          "https://main--sodipharm.netlify.app/api/news"
        );
        setnews(result.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://main--sodipharm.netlify.app/api/news/${id}`);
      setnews(news.filter((news) => news.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  const handleUpdate = (id, field, value) => {
    setnews(
      news.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleSave = async (id) => {
    const newss = news.find((item) => item.id === id);
    try {
      await axios.put(
        `https://main--sodipharm.netlify.app/api/news/${id}`,
        newss
      );
      alert("News updated successfully!");
    } catch (error) {
      console.error("Error saving updates:", error);
    }
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Update/Delete News</h1>
      <NewsTable
        news={news}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleSave={handleSave}
      />
    </div>
  );
};

export default UpdateDeletePage;
