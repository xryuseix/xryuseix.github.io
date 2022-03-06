/** @format */

import { GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import MarkdownRender, { PostPropType } from "../../components/MarkdownRender";

const Post = ({ postData }: PostPropType) => {
  const { title, date, description, contentHtml } = postData;
  return (
    <Layout title={title} description={description}>
      <MarkdownRender
        title={title}
        description={description}
        date={date}
        content={contentHtml}
      />
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
