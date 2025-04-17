type MdxLayoutProps = {
  children: React.ReactNode;
};

export default function MdxLayout({ children }: MdxLayoutProps) {
  return (
    <div className="prose dark:prose-invert max-w-none pb-16">{children}</div>
  );
}
