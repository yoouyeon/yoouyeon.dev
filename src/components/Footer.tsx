import Link from "next/link";
import { profileMetadata } from "@/blog.config";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { authorEn, github } = profileMetadata;

  return (
    <footer className="flex flex-col justify-center text-sm h-(--height-footer) max-w-(--width-main) mx-auto">
      <span>
        Made with ♥ by
        <Button asChild variant={"link"} size={"xs"}>
          <Link href={github}>{authorEn}</Link>
        </Button>
      </span>
      <span>© 2025</span>
    </footer>
  );
}
