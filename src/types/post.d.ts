export type FrontMatter = {
  title: string;
  description?: string;
  date: string;
};

export type PostMeta = {
  frontmatter: FrontMatter;
  slug: string;
};

export type Post = {
  meta: PostMeta;
  content: string;
};
