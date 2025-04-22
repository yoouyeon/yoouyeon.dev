import Link from "next/link";
import { BLOG_PROFILE } from "@/config/blog";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { AUTHOR, LINKS } = BLOG_PROFILE;

  return (
    <footer className="flex flex-col justify-center text-sm h-(--height-footer) max-w-(--width-main) mx-auto">
      <span>
        Made with ♥ by
        <Button asChild variant={"link"} size={"xs"}>
          <Link href={LINKS.GITHUB}>{AUTHOR.EN}</Link>
        </Button>
      </span>
      <span>© 2025</span>
    </footer>
  );
}
