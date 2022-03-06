/** @format */

import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
}

const Header: React.FC<Props> = ({ title, description }: Props) => {
  const defaultDescription =
    "xryuseixのWebページです.競技プログラミングやセキュリティの分野を勉強しています.";
  const defaultTitle = "xryuseix's HomePage";
  return (
    <Head>
      <title>{title ?? defaultTitle}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-language" content="ja" />
      <meta name="description" content={description ?? defaultDescription} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* TODO: 後ほど作成する */}
      {/* <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/7278547?s=200&amp;v=4"
      /> */}
    </Head>
  );
};

export default Header;
