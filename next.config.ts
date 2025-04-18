import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import stripFrontmatter from "@/libs/stripFrontmatter";
import { rewriteAssetsPath } from "@/libs/rewriteAssetsPath";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      stripFrontmatter,
      rewriteAssetsPath,
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
