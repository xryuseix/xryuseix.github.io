import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'
import FlagSubmit from '../components/flagSubmit'
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
        <label htmlFor="label1">[Welcome](100) Welcome Problem</label>
        <input type="checkbox" id="label1" />
        <div class="hidden_show">
          <p>
            This Problems Answer is <code>xryuseixCTF&#123;flag&#125;</code>
          </p>
          <div class="submit-column input">
            <input type="text" id="textForm1" />
          </div>
          <FlagSubmit flag="xryuseixCTF{flag}" id="textForm1" />
        </div>
      </div>
      <div class="hidden_box">
        <label htmlFor="label2">[Web](100) Wandering</label>
        <input type="checkbox" id="label2" />
        <div class="hidden_show">
          <p>このサイトの内容が多すぎて困ってます．検索ページを付けようか迷ってます...</p>
          <div class="submit-column input">
            <input type="text" id="textForm2" />
          </div>
          <FlagSubmit flag="xryuseixCTF{XSS_51y0ut051t3t3_ku54}" id="textForm2" />
        </div>
      </div>
    </Layout>
  )
}

export default SiteIndex
