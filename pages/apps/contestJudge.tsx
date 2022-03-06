import React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Meta from "../../components/meta";

type ContestJudgeProps = {
  location: Location;
};

const ContestJudgePageIndex: React.VFC<ContestJudgeProps> = (
  props: ContestJudgeProps
) => {
  const docsURL: string =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2YeEfXDZ-ANvSbNufYhQFFmzMEV6m9T97RMXMuVQ1qUae4FQoxyvvYlkyy938UVyfC8Ygx2pR9iBw";
  const docsParam: string = "chrome=false&amp;headers=false&amp";
  return (
    <Layout location={props.location}>
      <Seo title="All posts" />
      <Meta
        title="xryuseix judge"
        description="簡易的なクイズの成績判定システムです． 立命館大学プロジェクト連合合同イベントなどで使用しました．"
      />
      <h1>xryuseix judge</h1>
      <div className="spreadsheets">
        <h1>RiPProコンテストサイト</h1>
        <h2>注 : 更新は5分おきです．chrome以外は動かないかもしれません．</h2>
        (googleが5分おきに更新すると言ってますが，5分以上待たされることは普通にあります)
        <br />
        {/* TODO: 最終更新時間をgoogle スプレッドシートのGASのAPIで提供する */}
        <div className="Submissions">
          <h2>Submissions</h2>
          <iframe
            src={`${docsURL}/pubhtml?gid=1877264206&amp;single=true&amp;${docsParam};range=A1:E10000`}
            width="450"
            height="360"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="submissions"
          >
            読み込んでいます…
          </iframe>
        </div>
        <div className="Ranking">
          <h2>Ranking</h2>
          <iframe
            src={`${docsURL}/pubhtml?gid=1333289856&amp;single=true&amp;${docsParam};range=A1:G10000`}
            width="470"
            height="360"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="ranking"
          >
            読み込んでいます…
          </iframe>
          <iframe
            width="470"
            height="300"
            seamless
            frameBorder="1"
            scrolling="no"
            src={`${docsURL}/pubchart?oid=1265597912&amp;format=interactive`}
            title="ranking2"
          >
            読み込んでいます…
          </iframe>
        </div>
        <br />
        <div className="form">
          <h2>提出フォーム</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScbaoSJi2QG5K67bGJrBz4S51MQV8Yxcp3fgKFQ6y00n44rXQ/viewform?embedded=true"
            width="640"
            height="904"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="submit"
          >
            読み込んでいます…
          </iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContestJudgePageIndex;
