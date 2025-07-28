type BlogProps = {
    params: { slug: string };
};

export default function BlogPost({ params }: BlogProps) {
    const { slug } = params;

    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
                Blog Yazısı: {slug.replace(/-/g, " ")}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
                Bu yazının detaylı içeriği yakında eklenecek. Şimdilik sadece dinamik slug üzerinden sayfa açma testini yapıyoruz.
            </p>
        </main>
    );
}
