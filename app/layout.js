import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Word Cookie Answers",
  description: "Generated by create next app",
  icons: {
    icon: "/images/icon_cookie.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
