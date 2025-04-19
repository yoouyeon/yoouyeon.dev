import { RawCode, highlight, Pre } from "codehike/code";
import { lineNumbers } from "./line-numbers";
import "@/styles/codeblock.css";

type CodeBlockProps = {
  codeblock: RawCode;
};

async function CodeBlock({ codeblock }: CodeBlockProps) {
  const highlighted = await highlight(codeblock, "material-from-css");

  return (
    <div className="border font-mono text-sm leading-6 my-4 overflow-auto bg-[#fafafa] rounded-lg py-4">
      <Pre code={highlighted} handlers={[lineNumbers]} />
    </div>
  );
}

export default CodeBlock;
