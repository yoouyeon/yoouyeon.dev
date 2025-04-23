type HeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: HeaderProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 pb-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
