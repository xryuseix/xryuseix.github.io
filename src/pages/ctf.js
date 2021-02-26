import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'
import Toggle from '../components/flagSubmit'
import './ctf.css'

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="CTF" description="CTF問題をここにおきます．基本的に簡単です．" />
      <Meta title="CTF" />
      <h1>CTF</h1>
      <p>CTF問題をここにおきます．基本的に簡単です．</p>
      <h3>このページのソースはみないでね，フラグがそのまま載ってます．</h3>
      <div class="hidden_box">
        <label htmlFor="label1">[Welcome](100) 問題テスト</label>
        <input type="checkbox" id="label1" />
        <div class="hidden_show">
          <p>フラグ形式のテスト</p>
          <Toggle />
        </div>
      </div>
    </Layout>
  )
}




export default SiteIndex
/* <p>このサイトの内容が多すぎて困ってます．検索ページを付けようか迷ってます...</p> */
