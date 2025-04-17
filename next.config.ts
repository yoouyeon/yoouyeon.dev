import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import stripFrontmatter from "@/libs/stripFrontmatter";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, stripFrontmatter],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
