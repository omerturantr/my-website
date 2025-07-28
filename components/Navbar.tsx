"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/about", label: "Hakkımda" },
    { href: "/projects", label: "Projeler" },
    { href: "/contact", label: "İletişim" },
    { href: "/resume", label: "CV" },           // ✅ Eklendi
    { href: "/blog", label: "Blog" },           // ✅ Eklendi
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 py-4 px-6 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">Ömer Faruk Turan</div>
            <ul className="flex space-x-6">
                {navItems.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`${pathname === href
                                ? "text-blue-600 font-semibold"
                                : "text-gray-600 dark:text-gray-300"
                                } hover:text-blue-700 transition`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
