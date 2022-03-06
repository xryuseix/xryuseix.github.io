import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";

/* ブログを日付でソートして取得する */
export const getSortedPostsData = () => {
  const postsDirectory = path.join(process.cwd(), `news`);
  const newsDirNames = fs.readdirSync(postsDirectory);

  const allPostsData = newsDirNames.map((newsDirName: string) => {
    const fileContents = fs.readFileSync(
      `${postsDirectory}/${newsDirName}/README.md`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      newsDirName,
      ...(matterResult.data as { title: string; date: string }),
    };
  });
  return allPostsData.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
};

/* 指定したCTFのID(問題名)一覧を取得する */
export const getAllPostIds = () => {
  const postsDirectory = path.join(process.cwd(), `news`);
  const problemIds = fs.readdirSync(postsDirectory);
  return problemIds.map((problemId) => {
    return {
      params: {
        id: problemId,
      },
    };
  });
};

/* 指定した問題のwriteupの内容を取得する */
export const getPostData = async (id: string) => {
  const postsDirectory = path.join(process.cwd(), `news`);
  const fullPath = `${postsDirectory}/${id}/README.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const markdown = matter(fileContents);
  const contentHtml = (await remark().process(markdown.content)).toString();

  return {
    id,
    contentHtml,
    ...(markdown.data as { date: string; title: string }),
  };
};
