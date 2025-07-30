import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { ThemeProvider } from '@/context/ThemeContext';
import { AppProvider } from '@/context/AppContext';

export const metadata: Metadata = {
  title: "Ömer Faruk Turan | Kişisel Web Sitesi",
  description: "Frontend Developer, Blog, Projeler ve İletişim",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head />
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <DefaultSeo {...SEO} />
        <AppProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
