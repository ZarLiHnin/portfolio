// lib/markdownToHtml.ts
import { remark } from "remark";
import html from "remark-html";

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
