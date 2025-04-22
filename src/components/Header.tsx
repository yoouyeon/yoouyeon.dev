import Link from "next/link";
import { BLOG_PROFILE } from "@/config/blog";

type HeaderProps = {
  title: string;
  description?: string;
};

export default function Header({ title, description }: HeaderProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 pb-4">
      <div className="flex items-center justify-between gap-2">
        <Link
          href={"/"}
          className="text-mute w-full hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-mute/30"
        >
          {BLOG_PROFILE.TITLE}
        </Link>
        {/* <SearchButton />
          <ThemeButton /> */}
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
