import { type Plugin } from "unified";
import { type Root } from "mdast";

const stripFrontmatter: Plugin<[], Root> = () => {
  return (tree) => {
    tree.children = tree.children.filter((node) => node.type !== "yaml");
  };
};

export default stripFrontmatter;
