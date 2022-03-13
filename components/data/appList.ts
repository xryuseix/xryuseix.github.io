export type AppsProps = {
  appId: string;
  imageSrc: string;
  appTitle: string;
  appDesc: string;
  webPageLink: string;
  githubLink: string;
};

/* 配列をシャッフル */
const shuffle: Function = ([...array]: AppsProps[]): AppsProps[] => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/* アプリケーションリスト */
export const AppData: AppsProps[] = shuffle([
  {
    appId: "sa_plag",
    imageSrc: "saplag/sa-plag_demo.png",
    appTitle: "SA-Plag",
    appDesc: `ソースコードの盗作を判定するWeb APIです.\nAIが競技プログラミングのソースコードを学習しました.`,
    webPageLink: "/apps/sa-plag",
    githubLink: "https://github.com/xryuseix/SA-Plag",
  },
  {
    appId: "xryuseix_judge",
    imageSrc: "xryuseix_judge.png",
    appTitle: "xryuseix judge",
    appDesc:
      "簡易的なクイズの成績判定システムです. 立命館大学プロジェクト連合合同イベントなどで使用しました.",
    webPageLink: "/apps/contestJudge",
    githubLink: "",
  },
  {
    appId: "zoomg",
    imageSrc: "zoomg/zoomg.png",
    appTitle: "zoomg",
    appDesc: "バーチャル背景適用済み動画から部屋の画像を復元するライブラリ",
    webPageLink: "",
    githubLink: "https://github.com/Tsuku43/zoomg",
  },
  {
    appId: "cpstt",
    imageSrc: "cpstt/cpstt_logo.png",
    appTitle: "Competitive Programming Stress Test Tools",
    appDesc: "競技プログラミング用 ストレステストツール",
    webPageLink: "",
    githubLink: "https://github.com/xryuseix/CPSTT",
  },
  {
    appId: "ProofLeader",
    imageSrc: "proofLeader.png",
    appTitle: "ProofLeader",
    appDesc: "markdownファイルの句読点や整数表記を修正",
    webPageLink: "",
    githubLink: "https://github.com/xryuseix/ProofLeader",
  },
  {
    appId: "Color",
    imageSrc: "color.png",
    appTitle: "Color",
    appDesc: "画面全体と特定の色にする",
    webPageLink: "/apps/color",
    githubLink: "",
  },
]);
