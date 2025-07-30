import { allPosts, type Blog } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { NextSeo } from 'next-seo';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return allPosts.map((post: Blog) => ({
        slug: post._raw.flattenedPath,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = allPosts.find((post: Blog) => post._raw.flattenedPath === params.slug);
    if (!post) notFound();

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `https://omerturan.dev/blog/${post._raw.flattenedPath}`,
            images: [
                {
                    url: post.image ?? "/default-og.jpg",
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
        },
    };
}

export default function BlogPostPage({ params }: PageProps) {
    const post = allPosts.find((post: Blog) => post._raw.flattenedPath === params.slug);
    if (!post) notFound();

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <>
            <NextSeo
                title={post.title}
                description={post.description}
                openGraph={{
                    url: `https://omerturan.dev/blog/${post._raw.flattenedPath}`,
                    title: post.title,
                    description: post.description,
                    images: [
                        {
                            url: post.image ?? "/default-og.jpg",
                            alt: post.title,
                        },
                    ],
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
            />

            <main className="max-w-3xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-600 mb-6">{post.description}</p>
                <article className="prose dark:prose-invert">
                    <MDXContent />
                </article>
            </main>
        </>
    );
}
