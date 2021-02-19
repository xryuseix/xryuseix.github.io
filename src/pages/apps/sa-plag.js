import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Meta from '../../components/meta'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import saplagDemo from '../../images/saplag/sa-plag_demo.gif'
import './sa-plag.css'

const SiteIndex = ({ location }) => {
  const siteTitle = 'SA-Plag'
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Meta title="SA-Plag" />

      <table style={{ 'text-align': 'center' }}>
        <tr>
          <th style={{ width: '20%', height: 'auto' }}>
            <StaticImage src="../../images/saplag/sa-plag_logo.png" alt="SA-Plag logo" />
          </th>
          <th style={{ width: '10%', height: 'auto' }}></th>
          <th style={{ width: '70%', height: 'auto', 'text-align': 'left' }}>
            <div style={{ 'font-size': '4em' }}>SA-Plag</div>
          </th>
        </tr>
      </table>
      <div class="whats_sa_plag">
        <span class="box-title">What's SA-Plag ?</span>
        <p>ソースコードの盗作を判定するWeb APIです．</p>
        <p>AIが競技プログラミングのソースコードを学習しました．</p>
      </div>
      <div style={{ 'text-align': 'center' }}>
        <Link href="https://sa-plag.herokuapp.com">
          <img src={saplagDemo} alt="SA-Plag Demo" style={{ width: '100%', height: 'auto' }} />
        </Link>
        <h3>使用するには画像をクリックしてください</h3>
      </div>
      <br />
      <hr />
      <br />
      <div style={{ 'text-align': 'center' }}>
        この成果物はSecHack365内で作成されました．<br />
        <StaticImage src="../../images/saplag/SecHack365.png" alt="SecHack365 logo" style={{ width: '40%', height: 'auto' }} />
      </div>
    </Layout>
  )
}

export default SiteIndex
