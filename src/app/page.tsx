import Header from "@/components/Header";
import { profileMetadata } from "@/blog.config";
import Link from "next/link";

export default function Home() {
  const { author, description, email, github } = profileMetadata;

  return (
    <main>
      <Header title={author} description={description} />
      <div className="flex gap-4 text-sm pt-4">
        <Link href={github}>Github</Link>
        <Link href={`mailto:${email}`}>Mail</Link>
      </div>
      <hr />
    </main>
  );
}
