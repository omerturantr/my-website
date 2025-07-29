import withMDX from '@next/mdx';

const withMDXConfig = withMDX({
    extension: /\.mdx?$/,
});

export default withMDXConfig({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});
