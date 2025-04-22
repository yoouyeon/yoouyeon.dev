import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { BLOG_PROFILE, BLOG_SETTING } from "@/config/blog";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/libs/getAllPosts";

export default async function Home() {
  const { BIO, AUTHOR, LINKS } = BLOG_PROFILE;

  const posts = await getAllPosts();

  return (
    <>
      <Header title={`${AUTHOR.KO}(${AUTHOR.EN})`} description={BIO} />
      <div className="flex gap-4 text-sm pt-4">
        <button className="link-button">
          <Link href={`mailto:${LINKS.EMAIL}`}>Mail</Link>
        </button>
        <button className="link-button">
          <Link rel="noopener noreferrer" target="_blank" href={LINKS.GITHUB}>
            Github
          </Link>
        </button>
        <button className="link-button">
          <Link rel="noopener noreferrer" target="_blank" href={LINKS.WIKI}>
            Wiki
          </Link>
        </button>
      </div>
      <hr />
      <div className="flex gap-4 mt-8 mb-4 items-center">
        <h2 className="w-full text-xl font-semibold">최근 글</h2>
        <button className="link-button">
          <Link className="whitespace-nowrap text-sm" href="/writings">
            더보기
            <ChevronRightIcon />
          </Link>
        </button>
      </div>
      <PostList posts={posts.slice(0, BLOG_SETTING.RECENT_POST_COUNT)} />
    </>
  );
}
