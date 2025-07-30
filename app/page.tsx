'use client';

import Link from "next/link";
import { useAppContext } from '@/context/AppContext';

export default function Home() {
  const { theme, setTheme } = useAppContext();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-4 py-20 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        Merhaba, ben <span className="text-blue-600">Ömer Faruk Turan</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        Frontend Developer | Computer Engineering Student | Web Geliştirici
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/about"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Hakkımda
        </Link>
        <Link
          href="/projects"
          className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        >
          Projelerim
        </Link>
        <Link
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          İletişim
        </Link>
      </div>

      <div className="mt-10">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-sm text-gray-500 dark:text-gray-400 underline"
        >
          Temayı değiştir (Şu anki: {theme})
        </button>
      </div>

      <div className="mt-10 text-sm text-gray-400 dark:text-gray-600">
        © 2025 Ömer Faruk Turan. All rights reserved.
      </div>
    </main>
  );
}
