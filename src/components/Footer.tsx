import Link from "next/link";
import { profileMetadata } from "@/blog.config";

export default function Footer() {
  const { authorEn, github } = profileMetadata;

  return (
    <footer className="flex flex-col justify-center text-sm h-[var(--height-footer)]">
      <span>
        Made with ♥ by <Link href={github}>{authorEn}</Link>
      </span>
      <span>© 2025</span>
    </footer>
  );
}
