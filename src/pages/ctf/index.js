import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Meta from '../../components/meta'
import FlagSubmit from '../../components/flagSubmit'
import sha512 from 'js-sha512';

import './ctf.css'
import misc_Test from './content/problem.pdf'

const ProblemsData = [
  {
    title: '[Welcome](100) Welcome Problem',
    statement: (
      <>
        This Problems Answer is <code>xryuseixCTF&#123;flag&#125;</code>
      </>
    ),
    flag: 'xryuseixCTF{flag}',
    answer: 'xryuseixCTF{flag}'
  },
  {
    title: '[Web](100) Wandering',
    statement: 'このサイトの内容が多すぎて困ってます．検索ページを付けようか迷ってます...',
    flag: 'xryuseixCTF{XSS_51y0ut051t3t3_ku54}',
    answer: 'https://xryuseix.github.io/search/'
  },
  {
    title: '[misc](200) Time measurement',
    statement: (
      <>
        実行時間を計測するサイトがあります．試してみてください！
        <br />
        <a href="https://redos-server.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          https://redos-server.herokuapp.com/
        </a>
      </>
    ),
    flag: 'xryuseixCTF{Thi5_i5_ReD05_4tt4ck}',
    answer: (
      <>
        ReDoS攻撃が成立します．
        <br />
        <a href="https://redos-server.herokuapp.com/aaaaaaaaaaaaaaaaaaaaaaaaa">
          https://redos-server.herokuapp.com/aaaaaaaaaaaaaaaaaaaaaaaaa
        </a>
      </>
    )
  },
  {
    title: '[misc](200) Test',
    statement: (
      <>
        オンラインテストに向けてテスト用紙が配られました．あなたは試験開始前に問題を閲覧し，解きたいと思っています．頑張って解いてみてください！
        <br />
        <a href={misc_Test} download>
          [PDFファイル]
        </a>
      </>
    ),
    flag: 'xryuseixCTF{onaka_suita}',
    answer: (
      <>
        <code>qpdf --decrypt --password="password" problem.pdf out2.pdf</code> の後にWordで開く，または
        <code>qpdf --decrypt --password="risec" problem.pdf out2.pdf</code> の後に該当部分をコピーする．
      </>
    )
  }
]

/* 
 問題を全て出力
 title ... 問題タイトル
 statement ... 問題文
 flag ... 答え
*/
const Problems = ({ title, statement, flag, answer }) => {
  const label = Math.random().toString(36).slice(-12)
  const id = Math.random().toString(36).slice(-12)
  return (
    <div className="ctf_hidden-box">
      <label htmlFor={label}>{title}</label>
      <input type="checkbox" id={label} />
      <div className="ctf_hidden-show">
        <p>{statement}</p>
        <div className="ctf_submit-column input">
          <input type="text" id={id} />
        </div>
        <FlagSubmit flag={sha512(flag)} id={id} />
        <details style={{ display: 'none' }}>
          <summary>答え</summary>
          {answer}
        </details>
      </div>
    </div>
  )
}

const CtfSiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="CTF" description="CTF問題をここにおきます．基本的に簡単です．" />
      <Meta title="CTF" />
      <h1>CTF</h1>
      <p>CTF問題をここにおきます．基本的に簡単です．</p>
      <p>このページのソースはみないでね，フラグがそのまま載ってます．</p>
      {ProblemsData.map((data) => (
        <Problems {...data} />
      ))}
    </Layout>
  )
}

export default CtfSiteIndex
