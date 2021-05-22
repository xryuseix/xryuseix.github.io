import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'
import FlagSubmit from '../components/flagSubmit'
import './ctf.css'

const ProblemsData = [
  {
    title: '[Welcome](100) Welcome Problem',
    statement: (
      <>
        This Problems Answer is <code>xryuseixCTF&#123;flag&#125;</code>
      </>
    ),
    flag: 'xryuseixCTF{flag}',
  },
  {
    title: '[Web](100) Wandering',
    statement: "このサイトの内容が多すぎて困ってます．検索ページを付けようか迷ってます...",
    flag: 'xryuseixCTF{XSS_51y0ut051t3t3_ku54}',
  }
]

/* 
 問題を全て出力
 title ... 問題タイトル
 statement ... 問題文
 flag ... 答え
*/
const Problems = ({ title,  statement, flag }) => {
  const label = Math.random().toString(36).slice(-12)
  const id = Math.random().toString(36).slice(-12)
  return (
    <div class="hidden_box">
      <label htmlFor={label}>{title}</label>
      <input type="checkbox" id={label} />
      <div class="hidden_show">
        <p>
          {statement}
        </p>
        <div class="submit-column input">
          <input type="text" id={id} />
        </div>
        <FlagSubmit flag={flag} id={id} />
      </div>
    </div>
  )
}

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="CTF" description="CTF問題をここにおきます．基本的に簡単です．" />
      <Meta title="CTF" />
      <h1>CTF</h1>
      <p>CTF問題をここにおきます．基本的に簡単です．</p>
      <h3>このページのソースはみないでね，フラグがそのまま載ってます．</h3>
      {ProblemsData.map((data) => (
        <Problems {...data} />
      ))}
    </Layout>
  )
}

export default SiteIndex
