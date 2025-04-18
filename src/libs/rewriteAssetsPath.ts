import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

export const rewriteAssetsPath: Plugin<[string], Root> = () => {
  return (tree, file) => {
    visit(tree, "image", (node) => {
      if (node.url.startsWith("./assets/")) {
        const slug = file.path.split("/").at(-2);
        if (!slug) {
          throw new Error("Slug not found");
        }
        const fileName = node.url.replace("./assets/", "");
        node.url = `/posts/${slug}/assets/${fileName}`;
      }
    });
  };
};
