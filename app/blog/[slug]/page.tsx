import { Metadata } from "next";

// Doğru params tipini tanımla
interface PageProps {
    params: {
        slug: string;
    };
}

// Metadata için fonksiyon
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = params;
    return {
        title: `Blog: ${slug.replace(/-/g, " ")}`,
        description: `Blog yazısı: ${slug.replace(/-/g, " ")} hakkında detaylar.`,
    };
}

// asıl sayfa bileşeni
export default function BlogPostPage({ params }: PageProps) {
    const { slug } = params;

    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">
                Blog: {slug.replace(/-/g, " ")}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
                Blog post içeriği yakında burada yer alacak.
            </p>
        </main>
    );
}