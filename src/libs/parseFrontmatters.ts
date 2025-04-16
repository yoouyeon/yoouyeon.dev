import fs from "fs";
import matter from "gray-matter";
import { FrontMatter } from "@/types/post";

export const parseFrontmatters = (path: string): FrontMatter => {
  const fileContent = fs.readFileSync(path, "utf-8");
  const { data } = matter(fileContent);

  return data as FrontMatter;
};
