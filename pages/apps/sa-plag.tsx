import React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Meta from "../../components/meta";
import { StaticImage } from "gatsby-plugin-image";

import "./sa-plag.css";

import saplagDemo from "./images/saplag/sa-plag_demo.gif";

type SaPlagPageProps = {
  location: Location;
};

const SaPlagPageIndex: React.VFC<SaPlagPageProps> = (
  props: SaPlagPageProps
) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="All posts"
        description="ソースコードの盗作を判定するWeb APIです.AIが競技プログラミングのソースコードを学習しました."
      />
      <Meta title="SA-Plag" />

      <table className="sa-plag_center">
        <tr>
          <th className="sa-plag_title_logo">
            <StaticImage
              src="./images/saplag/sa-plag_logo.png"
              alt="SA-Plag logo"
            />
          </th>
          <th className="sa-plag_title">
            <div className="sa-plag_title_font">SA-Plag</div>
          </th>
        </tr>
      </table>
      <div className="sa-plag_whats">
        <span className="box-title">What&apos;s SA-Plag ?</span>
        <p>ソースコードの盗作を判定するWeb APIです.</p>
        <p>AIが競技プログラミングのソースコードを学習しました.</p>
      </div>
      <div className="sa-plag_center">
        <a
          href="https://sa-plag.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={saplagDemo} alt="SA-Plag Demo" className="sa-plag_demo" />
        </a>
        <h3>使用するには画像をクリックしてください</h3>
      </div>
      <br />
      <hr />
      <br />
      <div className="sa-plag_center">
        この成果物はSecHack365内で作成されました.
        <br />
        <a
          href="https://sechack365.nict.go.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            src="./images/saplag/SecHack365.png"
            alt="SecHack365 logo"
            className="sa-plag_sh"
          />
        </a>
      </div>
    </Layout>
  );
};

export default SaPlagPageIndex;
