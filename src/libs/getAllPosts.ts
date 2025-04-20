import { glob } from "fast-glob";
import { PostMeta } from "@/types/post";
import { parseMdx } from "@/libs/parseMdx";

export const getAllPosts = async () => {
  const posts = await glob("src/content/posts/**/*.mdx");
  const postList: PostMeta[] = [];

  for (const postPath of posts) {
    const { meta } = parseMdx(postPath);
    postList.push(meta);
  }

  // 날짜 내림차순 정렬
  postList.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date).getTime();
    const bDate = new Date(b.frontmatter.date).getTime();

    return bDate - aDate;
  });

  return postList;
};
