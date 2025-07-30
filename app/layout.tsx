import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "Ömer Faruk Turan | Kişisel Web Sitesi",
  description: "Frontend Developer, Blog, Projeler ve İletişim",
  openGraph: {
    title: "Ömer Faruk Turan | Kişisel Web Sitesi",
    description: "Frontend Developer, Blog, Projeler ve İletişim",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head />
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <AppProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}