import { glob } from "glob";
import { contentPath } from "@/blog.config";
import { parseFrontmatters } from "@/libs/parseFrontmatters";
import { FrontMatter } from "@/types/post";

export const getAllPosts = async () => {
  const posts = await glob(`${contentPath.posts}**/*.mdx`);
  const postList: FrontMatter[] = [];

  for (const postPath of posts) {
    const post = parseFrontmatters(postPath);
    postList.push(post);
  }

  // 날짜 내림차순 정렬
  postList.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return postList;
};
