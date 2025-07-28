const posts = [
    {
        title: "Next.js ile Kişisel Web Sitesi Yapımı",
        excerpt: "Bu yazıda Next.js, Tailwind ve TypeScript kullanarak nasıl modern bir kişisel site oluşturacağımızı anlatıyorum.",
        slug: "nextjs-kisisel-site"
    },
    {
        title: "React'te useState ve useEffect Nedir?",
        excerpt: "React hook'ları ile state ve lifecycle yönetimi hakkında bilmen gereken temel kavramlar burada!",
        slug: "react-usestate-useeffect"
    }
    // Yeni yazılar eklemek çok kolay
];

export default function BlogPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-blue-600 mb-10">📝 Blog Yazılarım</h1>

            <div className="space-y-8">
                {posts.map((post) => (
                    <div key={post.slug} className="p-6 border rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                        <a
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                            Devamını oku →
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}
