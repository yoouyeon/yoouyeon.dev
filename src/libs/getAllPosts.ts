import { glob } from "glob";
import { contentPath } from "@/blog.config";
import { parseFrontmatters } from "@/libs/parseFrontmatters";
import { generateSlugFromPath } from "./generateSlugFromPath";
import { PostMeta } from "@/types/post";

export const getAllPosts = async () => {
  const posts = await glob(`${contentPath.posts}**/*.mdx`);
  const postList: PostMeta[] = [];

  for (const postPath of posts) {
    const frontmatter = parseFrontmatters(postPath);
    const slug = generateSlugFromPath(postPath);

    postList.push({
      frontmatter,
      slug,
    });
  }

  // 날짜 내림차순 정렬
  postList.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date).getTime();
    const bDate = new Date(b.frontmatter.date).getTime();

    return bDate - aDate;
  });

  return postList;
};
