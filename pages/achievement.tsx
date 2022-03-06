import { NextPage } from "next";
import { Layout } from "../components/Layout";
import AchievementData, {
  ContentProp,
  ContentsProps,
} from "../components/data/achivementData";

import { MdOpenInNew } from "react-icons/md";

import styles from "../styles/achievement.module.css";

/* 
  Achievement の表の列を出力
  year ... 実績を出した年
  detail ... 実績内容
  url ... URL
*/
const AchievesContent: React.VFC<ContentProp> = (props: ContentProp) => {
  return (
    <tr className={styles.content}>
      <td className={styles.year}>{props.year}</td>
      <td className={styles.detail}>{props.detail}</td>
      <td className={styles.url}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          Link
          <MdOpenInNew />
        </a>
      </td>
    </tr>
  );
};

/* 
 Achievement の表の行を出力
 title ... 項目名
 content ... 表の行(実績の内容)
*/

const Achieves: React.VFC<ContentsProps> = (props: ContentsProps) => {
  return (
    <>
      <h2>{props.title}</h2>
      <table className={styles.table}>
        <tr className={styles.title}>
          <th className={styles.year}>年</th>
          <th className={styles.detail}>内容</th>
          <th className={styles.url}>URL</th>
        </tr>
        {props.content.map((data: ContentProp) => (
          <AchievesContent {...data} key={JSON.stringify(data)} />
        ))}
      </table>
    </>
  );
};

const AchievePageIndex: NextPage = () => {
  return (
    <Layout title="Achievements" description="過去の実績について記載します">
      <h1>Achievement</h1>
      <p>過去の実績について記載します</p>
      {AchievementData.map((data: ContentsProps) => (
        <Achieves {...data} key={JSON.stringify(data)} />
      ))}
    </Layout>
  );
};

export default AchievePageIndex;
