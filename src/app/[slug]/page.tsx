import Link from "next/link";
import dayjs from "dayjs";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import { profileMetadata } from "@/blog.config";
import Header from "@/components/Header";
import MdxLayout from "@/components/MdxLayout";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/libs/getAllPosts";
import { parseMdx } from "@/libs/parseMdx";

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
  const { meta } = parseMdx(`src/content/posts/${slug}/index.mdx`);
  const { frontmatter } = meta;
  const { title, description, date } = frontmatter;

  return (
    <main>
      <Header title={title} description={description} />
      <div className="text-sm text-mute font-light">
        <span>{dayjs(date).format("YYYY년 MM월 DD일")}</span>
        <span className="ml-1">| by</span>
        <Button asChild variant={"link"} size={"xs"}>
          <Link href={"/"}>{profileMetadata.authorKo}</Link>
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
        <Button variant={"link"} size={"sm"} asChild>
          <Link href={"/writings"}>
            <ArrowUturnLeftIcon />
            목록으로 돌아가기
          </Link>
        </Button>
      </section>
    </main>
  );
}
