/** @format */

import Link from "next/link";
import { Layout } from "../../components/Layout";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../utils/posts";
import styles from "../../styles/news.module.css";

const BlogPageIndex = ({
  allPostsData,
}: {
  allPostsData: { title: string; description: string; date: string }[];
}) => {
  return (
    <Layout
      title="news"
      description="このホームページの最新情報や最近の活動について記述します."
    >
      <h1>News</h1>
      <p>
        このページの新機能やブログの投稿, ちょっとしたニュースをここに記載します
      </p>
      <ol>
        {allPostsData.map((post) => (
          <Link href={`/news/${post.title}`} key={post.title} passHref>
            <li className={styles.blogCard}>
              <a className={styles.title}>
                <h3>{post.title}</h3>
              </a>
              <p className={styles.date}>{post.date}</p>
              <p>{post.description}</p>
              <p className={styles.readmore}>
                <Link href={`/news/${post.title}`}>
                  <a>Read more...</a>
                </Link>
              </p>
            </li>
          </Link>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPageIndex;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
