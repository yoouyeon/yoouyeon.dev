import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { profileMetadata, siteConfig } from "@/blog.config";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/libs/getAllPosts";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { authorKo, authorEn, description, email, github } = profileMetadata;

  const posts = await getAllPosts();

  return (
    <main>
      <Header title={`${authorKo}(${authorEn})`} description={description} />
      <div className="flex gap-4 text-sm pt-4">
        <Button asChild variant={"link"} size={"xs"}>
          <Link href={github}>Github</Link>
        </Button>
        <Button asChild variant={"link"} size={"xs"}>
          <Link href={`mailto:${email}`}>Mail</Link>
        </Button>
      </div>
      <hr />
      <div className="flex gap-4 mt-8 mb-4 items-center">
        <h2 className="w-full text-xl font-semibold">최근 글</h2>
        <Button asChild variant={"link"} size={"xs"}>
          <Link className="whitespace-nowrap text-sm" href="/writings">
            더보기
            <ChevronRightIcon />
          </Link>
        </Button>
      </div>
      <PostList posts={posts.slice(0, siteConfig.recentPostCount)} />
    </main>
  );
}
