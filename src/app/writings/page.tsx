import Header from "@/components/Header";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/libs/getAllPosts";

export default async function Writings() {
  const posts = await getAllPosts();

  return (
    <>
      <Header
        title={"Writings"}
        description={"겪고 배운 것들을 글로 정리했습니다."}
      />
      <hr />
      <div className="text-sm text-mute font-light pb-4">
        총 {posts.length}개의 글
      </div>
      <PostList posts={posts} />
    </>
  );
}
