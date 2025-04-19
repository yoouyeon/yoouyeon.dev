type MdxLayoutProps = {
  children: React.ReactNode;
};

export default function MdxLayout({ children }: MdxLayoutProps) {
  return <article className="mdx pb-16">{children}</article>;
}
