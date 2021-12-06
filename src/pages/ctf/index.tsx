import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Meta from '../../components/meta'
import FlagSubmit from '../../components/flagSubmit'
import { ProblemsData, ProblemsProps } from '../../components/data/ctfData'
import sha256 from 'fast-sha256'

import './ctf.css'

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
