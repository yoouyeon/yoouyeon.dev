import type { Metadata } from "next";
import Link from "next/link";
import dayjs from "dayjs";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import { BLOG_PROFILE } from "@/config/blog";
import Header from "@/components/Header";
import MdxLayout from "@/components/MdxLayout";
import Giscus from "@/components/Giscus";
import { getAllPosts } from "@/libs/getAllPosts";
import { parseMdx } from "@/libs/parseMdx";
import Button from "@/components/ui/Button";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = parseMdx(`src/content/posts/${slug}/index.mdx`);
  const { frontmatter } = meta;
  const { title, description } = frontmatter;

  return {
    title,
    description,
  };
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const { default: PostComponent } = await import(
    `@/content/posts/${slug}/index.mdx`
  );
  const { meta } = parseMdx(`src/content/posts/${slug}/index.mdx`);
  const { frontmatter } = meta;
  const { title, description, date } = frontmatter;

  return (
    <>
      <Header title={title} description={description} />
      <div className="text-sm text-mute font-light">
        <span>{dayjs(date).format("YYYY년 MM월 DD일")}</span>
        <span className="ml-1">| by</span>
        <Button variant={"link"} asChild>
          <Link href={"/"}>{BLOG_PROFILE.AUTHOR.KO}</Link>
        </Button>
      </div>
      <hr />
      <MdxLayout>
        <PostComponent />
      </MdxLayout>
      <div
        role="separator"
        aria-orientation="horizontal"
        className="flex items-center py-16"
      >
        <div className="flex-grow border-t" aria-hidden="true" />
        <span className="px-3 text-sm whitespace-nowrap font-light text-mute">
          end
        </span>
        <div className="flex-grow border-t" aria-hidden="true" />
      </div>
      <section role="navigation" className="mb-16">
        <button>
          <Link href={"/writings"}>
            <ArrowUturnLeftIcon />
            목록으로 돌아가기
          </Link>
        </button>
      </section>
      <Giscus />
    </>
  );
}
