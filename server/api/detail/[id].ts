import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler(async (event) => {
  const fileName = getRouterParam(event, 'id') + ".md";

  // 获取文章内容
  const fullPath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  // 解析扉页信息
  const matterInfo = matter(fileContent);

  // 转换markdown为HTML
  const processedContent = await remark().use(html).process(matterInfo.content);
  const content = processedContent.toString();

  return {
    title: matterInfo.data.title,
    content,
  };
});



// $fetch('/api/create-post', { method: 'post', body: { id: 'new id' } })
// export default defineEventHandler(async (event) => {
//     const body = await readBody(event)
//     return { body }
// }

// /api/query?param1=a&param2=b
// export default defineEventHandler((event) => {
//   const query = getQuery(event)
//   return { a: query.param1, b: query.param2 }
// })