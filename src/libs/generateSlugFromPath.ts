import { contentPath } from "@/blog.config";

export const generateSlugFromPath = (path: string) => {
  const { posts, filename } = contentPath;

  // path에서 posts(앞쪽 path)와 뒤쪽 index.mdx(파일명)을 제거
  return path
    .replace(new RegExp(`^${posts}`), "")
    .replace(new RegExp(`/${filename}$`), "");
};
