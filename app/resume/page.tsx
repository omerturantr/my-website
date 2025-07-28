export default function ResumePage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Özgeçmiş (CV)</h1>

            {/* Eğitim */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">🎓 Eğitim</h2>
                <p className="text-gray-800 dark:text-gray-300">
                    <strong>İstanbul Sabahattin Zaim Üniversitesi</strong><br />
                    Bilgisayar Mühendisliği (2021 - 2025)
                </p>
            </section>

            {/* Yetenekler */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">💻 Teknik Yetenekler</h2>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                    <li>HTML, CSS, JavaScript, React, Tailwind CSS</li>
                    <li>TypeScript, Next.js, Node.js, Express.js</li>
                    <li>MongoDB, Firebase, PHP, MySQL</li>
                    <li>Git, GitHub, VS Code</li>
                </ul>
            </section>

            {/* Sertifikalar */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">📄 Sertifikalar</h2>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                    <li>Frontend Geliştirme Eğitimi - Udemy</li>
                    <li>Python ile Görüntü İşleme - BTK Akademi</li>
                </ul>
            </section>

            {/* CV İndir */}
            <section>
                <a
                    href="/resume.pdf"
                    download
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                    📥 CV&apos;yi PDF olarak indir
                </a>
            </section>
        </main>
    );
}
