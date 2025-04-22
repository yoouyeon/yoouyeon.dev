import type { MetadataRoute } from "next";
import { BLOG_LINK } from "@/config/blog";
import { getAllPosts } from "@/libs/getAllPosts";

// NOTE : url이 50000개가 넘는 경우에는 사이트맵을 쪼개야 한다는 것을 기억하기
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    url: `${BLOG_LINK.BASE}/${post.slug}`,
    lastModified: new Date(),
  }));
}
