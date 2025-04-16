import Link from "next/link";
import dayjs from "dayjs";
import { siteConfig } from "@/blog.config";
import { FrontMatter } from "@/types/post";

type PostListProps = {
  posts: FrontMatter[];
};

function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.slice(0, siteConfig.recentPostCount).map((postFrontMatter) => {
        const { title, slug, date } = postFrontMatter;

        return (
          <li key={slug}>
            <Link className="flex gap-4 py-2" href={slug}>
              <span className="whitespace-nowrap w-full">{title}</span>
              <span className="text-sm text-mute whitespace-nowrap">
                {dayjs(date).format("YY.MM.DD")}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
