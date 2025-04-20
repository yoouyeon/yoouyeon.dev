import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/codeblock";
import "@/styles/mdx.css";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: ({ children }) => (
      <h2 className="mt-6 mb-8 text-2xl font-bold text-accent">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-8 text-xl font-bold">{children}</h3>
    ),
    p: ({ children }) => <p className="mb-5 leading-7">{children}</p>,
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-4 mb-5">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-4 mb-5">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-mute/50 pl-4 font-serif">
        {children}
      </blockquote>
    ),
    a: ({ children, href }) => (
      <a href={href} className="mdx-link">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-mute/30 rounded px-1 py-0.5 text-sm font-semibold">
        {children}
      </code>
    ),
    table: ({ children }) => (
      <table className="w-full border-collapse border border-mute mb-5">
        {children}
      </table>
    ),
    th: ({ children }) => (
      <th className="border border-mute bg-mute/30 px-2 py-1 text-left">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-mute px-2 py-1">{children}</td>
    ),
    CodeBlock: CodeBlock,
  };
}
