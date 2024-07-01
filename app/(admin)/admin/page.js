"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use `next/router` instead of `next/navigation`
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({ username: username, password: password });
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_URL + "api/login",
        data
      );

      if (res.status === 200) {
        setSuccess("Login successful");
        setError("");
        router.push("/admin/dashboard/main/");
      } else {
        setError("Invalid credentials");
        setSuccess("");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Server Error");
      setSuccess("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 mb-2 mr-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 mb-2 mr-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow block focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="ml-2 inline-block text-gray-600 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
