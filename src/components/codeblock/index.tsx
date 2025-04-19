import { RawCode, highlight, Pre } from "codehike/code";

type CodeBlockProps = {
  codeblock: RawCode;
};

async function CodeBlock({ codeblock }: CodeBlockProps) {
  const highlighted = await highlight(codeblock, "min-light");

  return <Pre code={highlighted} />;
}

export default CodeBlock;
