import Link from "next/link";
import { profileMetadata, siteConfig } from "@/blog.config";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/libs/getAllPosts";

export default async function Home() {
  const { authorKo, authorEn, description, email, github } = profileMetadata;

  const posts = await getAllPosts();

  return (
    <main>
      <Header title={`${authorKo}(${authorEn})`} description={description} />
      <div className="flex gap-4 text-sm pt-4">
        <Link href={github}>Github</Link>
        <Link href={`mailto:${email}`}>Mail</Link>
      </div>
      <hr />
      <div className="flex gap-4 mt-8 mb-4 items-center">
        <h2 className="w-full">최근 글</h2>
        <Link className="whitespace-nowrap text-sm" href="/writings">
          더보기
        </Link>
      </div>
      <PostList posts={posts.slice(0, siteConfig.recentPostCount)} />
    </main>
  );
}
