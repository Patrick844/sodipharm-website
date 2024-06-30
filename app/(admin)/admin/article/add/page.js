// components/ResponsiveForm.js
"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import axios from "axios";
import { useRouter } from "next/navigation";

const ArticleFormAdd = () => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    keywords: "",
  });
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

  let i = 0;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const router = useRouter();

  const goBack = () => {
    router.back(); // Navigate back to the previous page
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const data = JSON.stringify(formData);
    const result = await axios.post(
      process.env.NEXT_PUBLIC_URL + "api/articles",
      data,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
    if (result.status === 200) {
      setBannerMessage("Article added successfully!");
      setIsBannerVisible(true);
      setFormData({ title: "", url: "", keywords: "" }); // Clear form
    }
  }

  const handleBannerClose = () => {
    setIsBannerVisible(false);
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Article</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="Title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Enter title"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              URL
            </label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Enter URL"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="keywords"
              className="block text-sm font-medium text-gray-700"
            >
              Keywords
            </label>
            <input
              type="text"
              id="keywords"
              value={formData.keywords}
              name="keywords"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Enter keywords"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <a
          onClick={goBack}
          class="cursor-pointer mt-3 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        >
          <svg
            class="w-4 h-4 inline-block mr-1"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 4.293a1 1 0 0 1 1.414 1.414L8.414 10l2.707 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3zM7 10a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="hidden md:inline-block">Back</span>
        </a>
      </div>
      <Banner
        message={bannerMessage}
        isVisible={isBannerVisible}
        onClose={handleBannerClose}
      />
    </div>
  );
};

export default ArticleFormAdd;
