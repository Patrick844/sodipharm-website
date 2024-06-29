import { Montserrat } from "next/font/google";
import Navbar from "@/components/NavBar";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
