import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ömer Faruk Turan | Kişisel Web Sitesi",
  description: "Frontend Developer, Blog, Projeler ve İletişim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
