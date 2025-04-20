export const generateSlugFromPath = (path: string) => {
  // path에서 posts(앞쪽 path)와 뒤쪽 index.mdx(파일명)을 제거
  return path
    .replace(new RegExp(`^src/content/posts/`), "")
    .replace(new RegExp(`/index.mdx$`), "");
};
