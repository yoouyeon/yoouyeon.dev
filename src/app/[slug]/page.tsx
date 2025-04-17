import dayjs from "dayjs";
import { contentPath, profileMetadata } from "@/blog.config";
import Header from "@/components/Header";
import { getAllPosts } from "@/libs/getAllPosts";
import { parseMdx } from "@/libs/parseMdx";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PostProps = {
  params: Promise<{ slug: string }>;
};

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const { default: PostComponent } = await import(
    `@/content/posts/${slug}/index.mdx`
  );
  const { posts, filename } = contentPath;
  const { meta } = parseMdx(`${posts}${slug}/${filename}`);
  const { frontmatter } = meta;
  const { title, description, date } = frontmatter;

  return (
    <main>
      <Header title={title} description={description} />
      <div className="text-sm text-mute font-light">
        <span>{dayjs(date).format("YYYY년 MM월 DD일")}</span>
        <span className="mx-1">| by</span>
        <Link href={"/"}>{profileMetadata.authorKo}</Link>
      </div>
      <hr />
      <PostComponent />
    </main>
  );
}
