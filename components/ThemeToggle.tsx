'use client'; // App Router kullanıyorsan ekle

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Current theme: {theme}
        </button>
    );
}
