/** @format */

import { NextPage } from "next";
import { Layout } from "../components/Layout";
import FlagSubmit from "../components/FlagSubmit";
import { ProblemsData, ProblemsProps } from "../components/data/ctfData";
import sha256 from "fast-sha256";

import styles from "../styles/ctf.module.css";

/* 
 問題を全て出力
 title ... 問題タイトル
 statement ... 問題文
 flag ... 答え
*/
const Problems: React.VFC<ProblemsProps> = (props: ProblemsProps) => {
  const label = `${props.title}_label`;
  const id = `${props.title}_id`;
  return (
    <div className={styles.hiddenBox}>
      <label htmlFor={label}>{props.title}</label>
      <input type="checkbox" id={label} />
      <div className={styles.hiddenShow}>
        <p>{props.statement}</p>
        <div className={styles.submitForm}>
          <div className={styles.submitColumn}>
            <input type="text" id={id} placeholder={"xryuseixCTF{flag}"} />
          </div>
          <FlagSubmit
            flag={sha256(new TextEncoder().encode(props.flag))}
            id={id}
          />
        </div>
        <details style={{ display: "none" }}>
          <summary>答え</summary>
          {props.answer}
        </details>
      </div>
    </div>
  );
};

const CtfPageIndex: NextPage = () => {
  return (
    <Layout
      title="CTF"
      description="CTF問題をここにおきます. 基本的に簡単です."
    >
      <h1>CTF</h1>
      <p>CTF問題をここにおきます. 基本的に簡単です.</p>
      <p>このページのソースはみないでね, フラグがそのまま載ってます.</p>
      {ProblemsData.map((data) => (
        <Problems {...data} key={data.title} />
      ))}
    </Layout>
  );
};

export default CtfPageIndex;
