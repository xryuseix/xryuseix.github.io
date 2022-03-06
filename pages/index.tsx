/** @format */

import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components/Layout";

import styles from "../styles/index.module.css";

const faviconStyle: React.CSSProperties = {
  borderRadius: "50%",
};

const Profile: React.VFC = () => {
  return (
    <div className={styles.flexbox}>
      <div className={styles.icon}>
        <img
          src="/images/icon-256x256.png"
          alt="Profile Icon"
          style={faviconStyle}
        />
      </div>
      <section style={{ padding: "20px" }}>
        <div className={styles.rotate}>
          <h3 style={{ margin: "0px" }}>Programmer</h3>
          <span className={styles.front}>xryuseix</span>
          <span className={styles.back}>Ryusei&nbsp;Ishikawa</span>
        </div>
        <div className={styles.box}>
          <span className={styles.boxTitle}>Study</span>
          Algorithm &amp; Security
        </div>
        <div className={styles.box}>
          <span className={styles.boxTitle}>College</span>
          Ritsumeikan University
        </div>
      </section>
    </div>
  );
};

const BottomButtons: React.VFC = () => {
  const buttons = [
    {
      title: "Apps",
      href: "apps",
    },
    {
      title: "Achieves",
      href: "achievement",
    },
    {
      title: "Account",
      href: "account",
    },
    {
      title: "CTF",
      href: "ctf",
    },
    {
      title: "Slides",
      href: "lt",
    },
  ];
  return (
    <ul className={styles.footerMenu}>
      {buttons.map(({ title, href }) => (
        <li className={`${styles.footerColumn} ${styles.scale}`} key={href}>
          <Link href={`/${href}`}>
            <a>
              <h3>{title}</h3>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Profile />
      <BottomButtons />
    </Layout>
  );
};

export default Home;
