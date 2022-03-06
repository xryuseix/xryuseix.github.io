/** @format */

import { NextPage } from "next";
import { Layout } from "../../components/Layout";
import styles from "../../styles/apps/SaPlag.module.css";

const SaPlagPageIndex: NextPage = () => {
  return (
    <Layout
      title="SA-Plag"
      description="ソースコードの盗作を判定するWeb APIです. AIが競技プログラミングのソースコードを学習しました."
    >
      <table className={styles.center}>
        <tr>
          <th className={styles.titleLogo}>
            <img
              src="/apps-images/saplag/sa-plag_logo.png"
              alt="SA-Plag logo"
            />
          </th>
          <th className={styles.title}>
            <div className={styles.titleFont}>SA-Plag</div>
          </th>
        </tr>
      </table>
      <div className={styles.whats}>
        <span className={styles.boxTitle}>What&apos;s SA-Plag ?</span>
        <p>ソースコードの盗作を判定するWeb APIです.</p>
        <p>AIが競技プログラミングのソースコードを学習しました.</p>
      </div>
      <div className={styles.center}>
        <a
          href="https://sa-plag.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/apps-images/saplag/sa-plag_demo.gif"
            alt="SA-Plag Demo"
            className={styles.demo}
          />
        </a>
        <h3>使用するには画像をクリックしてください</h3>
      </div>
      <br />
      <hr />
      <br />
      <div className={styles.center}>
        この成果物はSecHack365内で作成されました.
        <br />
        <a
          href="https://sechack365.nict.go.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/apps-images/saplag/SecHack365.png"
            alt="SecHack365 logo"
            className={styles.sh}
          />
        </a>
      </div>
    </Layout>
  );
};

export default SaPlagPageIndex;
