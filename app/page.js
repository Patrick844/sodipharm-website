"use client";
import Navbar from "@/components/NavBar";
import Main from "@/components/Main";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/Loading";

export default function HomePage() {
  const router = useRouter();
  router.push("/home");
}
