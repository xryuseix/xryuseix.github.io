import { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import importAll from "../../utils/importAll";
import { AppData, AppsProps } from "../../components/data/appList";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdOpenInNew } from "react-icons/md";
import styles from "../../styles/apps/apps.module.css";

const images = importAll(
  require.context("../../public/apps-images/", true, /\.(png|jpe?g|svg)$/)
);
const icons = importAll(
  require.context("../../public/icons/", false, /(icon-32x32|github)\.png$/)
);

type ReferenceProps = {
  title: string;
  link: string;
  logo: string;
};

/* Webページ・GitHubリンク生成コンポーネント */
const ReferenceLink: React.VFC<ReferenceProps> = (props: ReferenceProps) => {
  if (Object.values(props.link).join("") === "") {
    return <td className={styles.descLink}></td>;
  } else {
    return (
      <td className={styles.descLink}>
        <a
          href={Object.values(props.link).join("")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icons[`${props.logo}.png`]?.default.src}
            alt={props.logo}
            className={styles.descLinkCol}
          />
          {props.title}
          {props.title === "GitHub" ? <MdOpenInNew /> : ""}
        </a>
      </td>
    );
  }
};

/*
 アプリケーション管理
 appId ... 固有ID
 appPageLink ... アプリケーションのリンク
 imageSrc ... 画像のリンク
 imageAlt ... 画像
 appTitle ... タイトル
 appDesc ... 説明
 webPageLink ... Webページのリンク
 githubLink ... GitHubのリンク
*/

const Apps: React.VFC<AppsProps> = (props: AppsProps): JSX.Element => {
  return (
    <div id={props.appId}>
      <table className={styles.table}>
        <tr>
          <td className={styles.imageCol}>
            <Link href={props.webPageLink}>
              <a>
                <img
                  src={images[props.imageSrc]?.default.src}
                  alt={props.appTitle}
                  className={styles.image}
                />
              </a>
            </Link>
          </td>{" "}
          <td className={styles.descCol}>
            <table className={styles.titleDesc}>
              <tr>
                <th colSpan={2} className={styles.title}>
                  {props.appTitle}
                </th>
              </tr>
              <tr>
                <td colSpan={2} className={styles.desc}>
                  {props.appDesc}
                </td>
              </tr>
              <tr>
                <ReferenceLink
                  link={props.webPageLink}
                  title="Webサイト"
                  logo="icon-32x32"
                />
                <ReferenceLink
                  link={props.githubLink}
                  title="GitHub"
                  logo="github"
                />
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <hr />
    </div>
  );
};

/* もくじのコンポーネント */
const Summary: React.VFC = (): JSX.Element => {
  return (
    <details className={styles.details}>
      <summary>もくじ</summary>
      <ul>
        {AppData.map((data) => (
          <li key={data.appId}>
            <AnchorLink href={`#${data.appId}`} offset="50">
              {data.appTitle}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </details>
  );
};

const AppPageIndex: NextPage = () => {
  return (
    <Layout
      title="Applications"
      description="過去に作ったアプリケーションのまとめです"
    >
      <h1>Applications</h1>
      <p>過去に作ったアプリケーションを一部紹介します</p>
      <Summary />
      {AppData.map((data) => (
        <Apps {...data} key={data.appId} />
      ))}
    </Layout>
  );
};

export default AppPageIndex;
