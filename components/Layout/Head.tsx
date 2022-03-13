/** @format */

import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
}

const Header: React.FC<Props> = ({ title, description, ogImage }: Props) => {
  const defaultDescription = "xryuseixのWebページです.";
  const defaultTitle = "xryuseix's HomePage";
  const defaultOgImage = "https://avatars.githubusercontent.com/u/51394682";
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const OGPImage = ogImage || defaultOgImage;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-language" content="ja" />
      <meta name="description" content={pageDescription} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:image" content={OGPImage} />
    </Head>
  );
};

export default Header;
