// next-seo.config.ts
const siteUrl = "https://omerturan.dev"; // Değiştir

const config = {
    title: "Ömer Turan | Kişisel Web Sitesi",
    description: "Frontend & Fullstack Developer olarak projelerim, bloglarım ve iletişim bilgilerim.",
    canonical: siteUrl,
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: siteUrl,
        site_name: "Ömer Turan",
        images: [
            {
                url: `${siteUrl}/og-image.jpg`, // Varsayılan sosyal medya görseli
                width: 1200,
                height: 630,
                alt: "Ömer Turan",
            },
        ],
    },
    twitter: {
        handle: "@omerturantr",
        site: "@omerturantr",
        cardType: "summary_large_image",
    },
};

export default config;
