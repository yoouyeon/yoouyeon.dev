import { profileMetadata } from "@/blog.config";
import SearchButton from "./SearchButton";
import ThemeButton from "./ThemeButton";

type HeaderProps = {
  title: string;
  description?: string;
};

export default function Header({ title, description }: HeaderProps) {
  const { siteTitle } = profileMetadata;

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-mute w-full">{siteTitle}</span>
        {/* <SearchButton />
          <ThemeButton /> */}
      </div>
      <h1 className="my-4">{title}</h1>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
