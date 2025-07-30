import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import path from 'path';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true },
        slug: { type: 'string', required: true }
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/blog/${post.slug}`
        }
    }
}));

export default makeSource({
    contentDirPath: 'content/blog',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrism]
    }
});
