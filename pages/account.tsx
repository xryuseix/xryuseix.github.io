import { NextPage } from "next";
import { Layout } from "../components/Layout";
import importAll from "../utils/importAll";

import Account from "../components/data/account.json";
import styles from "../styles/account.module.css";

type AccountData = {
  service: string;
  url: string;
  image: string;
  userId: string;
};

const imageStyle: React.CSSProperties = { maxWidth: "80px", maxHeight: "80px" };

const AccountPageIndex: NextPage = () => {
  const images = importAll(
    require.context("../public/icons", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <Layout
      title="Account"
      description="各Webページのアカウントについて記載します."
    >
      <h1>Account</h1>
      <p>各サービスのアカウントです</p>
      <div className={styles.logos}>
        {Account.map((data: Readonly<AccountData>) => (
          <div className={styles.logo} key={data.service}>
            <div className={styles.service}>{data.service}</div>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <div className={styles.serviceLogo}>
                <img
                  src={images[data.image]?.default.src}
                  alt={data.service}
                  style={imageStyle}
                />
              </div>
              <div className={styles.userid}>{data.userId}</div>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AccountPageIndex;
