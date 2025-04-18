import { profileMetadata } from "@/blog.config";

type HeaderProps = {
  title: string;
  description?: string;
};

export default function Header({ title, description }: HeaderProps) {
  const { siteTitle } = profileMetadata;

  return (
    <div className="flex flex-col items-start justify-between gap-4 pb-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-mute w-full">{siteTitle}</span>
        {/* <SearchButton />
          <ThemeButton /> */}
      </div>
      <h1>{title}</h1>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
