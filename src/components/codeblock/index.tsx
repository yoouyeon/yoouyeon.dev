import { RawCode, highlight, Pre } from "codehike/code";
import { lineNumbers } from "./lineNumbers";
import "@/styles/codeblock.css";

type CodeBlockProps = {
  codeblock: RawCode;
};

async function CodeBlock({ codeblock }: CodeBlockProps) {
  const highlighted = await highlight(codeblock, "material-from-css");

  return (
    <div className="border border-mute/50 font-mono text-sm leading-6 overflow-auto bg-[#fafafa] rounded-md py-4 mb-5">
      <Pre code={highlighted} handlers={[lineNumbers]} />
    </div>
  );
}

export default CodeBlock;
