import { profileMetadata } from "@/blog.config";

type HeaderProps = {
  title: string;
  description?: string;
};

export default function Header({ title, description }: HeaderProps) {
  const { siteTitle } = profileMetadata;

  return (
    <div>
      <div>
        <span className="text-mute">{siteTitle}</span>
        {/* TODO - 메뉴 아이콘 버튼 */}
      </div>
      <h1 className="my-4">{title}</h1>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
