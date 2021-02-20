import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'
import { StaticImage } from 'gatsby-plugin-image'
import './index.css'

const SiteIndex = ({ location }) => {
  const siteTitle = 'トップページ'
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="xryuseix" />
      <Meta title="Home" />
      <h1>xryuseix's HomePage</h1>

      <div class="flexbox">
        <div class="icon">
          <StaticImage src="../../static/favicons/icon-256x256.png" alt="icon" />
        </div>
        <section>
          <h3>Programmer</h3>
          <div class="rotate">
            <h1 class="front">Ryusei&nbsp;Ishikawa</h1>
            <h1 class="back">xryuseix</h1>
          </div>
          <p>Algorithm&nbsp;&amp;&nbsp;Security</p>
        </section>
      </div>
    </Layout>
  )
}

export default SiteIndex
