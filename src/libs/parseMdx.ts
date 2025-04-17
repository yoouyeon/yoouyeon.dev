import fs from "fs";
import matter from "gray-matter";
import { Post, PostMeta } from "@/types/post";
import { generateSlugFromPath } from "./generateSlugFromPath";

export const parseMdx = (path: string): Post => {
  const fileContent = fs.readFileSync(path, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const slug = generateSlugFromPath(path);

  return {
    meta: {
      frontmatter,
      slug,
    } as PostMeta,
    content,
  };
};
