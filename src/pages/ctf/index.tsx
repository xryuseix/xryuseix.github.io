import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Meta from '../../components/meta'
import FlagSubmit from '../../components/flagSubmit'
import sha256 from 'fast-sha256'

import './ctf.css'
import miscTestPDF from './content/problem.pdf'

interface ProblemsProps {
  title: string
  statement: string | JSX.Element
  flag: string
  answer: string | JSX.Element
}

const ProblemsData: ProblemsProps[] = [
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
        <a href={miscTestPDF} download>
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
const Problems: React.VFC<ProblemsProps> = (props: ProblemsProps) => {
  const label = `${props.title}_label`
  const id = `${props.title}_id`
  return (
    <div className="ctf_hidden-box">
      <label htmlFor={label}>{props.title}</label>
      <input type="checkbox" id={label} />
      <div className="ctf_hidden-show">
        <p>{props.statement}</p>
        <div className="ctf_submit-column input">
          <input type="text" id={id} />
        </div>
        <FlagSubmit flag={sha256(new TextEncoder().encode(props.flag))} id={id} />
        <details style={{ display: 'none' }}>
          <summary>答え</summary>
          {props.answer}
        </details>
      </div>
    </div>
  )
}

interface CTFPageProps {
  location: Location
}

const CtfPageIndex: React.VFC<CTFPageProps> = (props: CTFPageProps) => {
  return (
    <Layout location={props.location}>
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

export default CtfPageIndex
;('IntrinsicAttributes')
;('IntrinsicClassAttributes<ToggleClass>')
;('Readonly<{}>')
;('Readonly<{ children?: ReactNode; }>')
