"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { BLOG_PROFILE } from "@/config/blog";
const ThemeButton = dynamic(() => import("@/components/ThemeButton"), {
  ssr: false,
});

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-2 mb-4">
      <Link
        href={"/"}
        className="text-mute w-full no-underline hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-mute/30"
      >
        {BLOG_PROFILE.TITLE}
      </Link>
      {/* <SearchButton /> */}
      <ThemeButton />
    </div>
  );
}
