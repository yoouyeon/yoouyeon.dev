import Link from "next/link";
import dayjs from "dayjs";
import { PostMeta } from "@/types/post";

type PostListProps = {
  posts: PostMeta[];
};

function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map((meta) => {
        const { frontmatter, slug } = meta;
        const { title, date } = frontmatter;

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
