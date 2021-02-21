import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'

import { StaticImage } from 'gatsby-plugin-image'

import './index.css'

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="xryuseix" description="ここがトップページや！！！！！！！！！" />
      <Meta title="Home" />
      <div class="flexbox">
        <div class="icon">
          <StaticImage src="../../static/favicons/icon-256x256.png" alt="icon" style={{ 'border-radius': '50%' }} />
        </div>
        <section style={{ padding: '20px' }}>
          <div class="rotate" style={{ 'font-size': '3em' }}>
            <h3 style={{ margin: '0px' }}>Programmer</h3>
            <span class="front">xryuseix</span>
            <span class="back">Ryusei&nbsp;Ishikawa</span>
          </div>
          <h5 class="box">
            <span class="box-title">Study</span>
            Algorithm &amp; Security
          </h5>
          <h5 class="box">
            <span class="box-title">College</span>
            Ritsumeikan University
          </h5>
        </section>
      </div>

      <ul class="footer-menu">
        <li class="footer-column scale">
          <Link href="/news">
            <h3>News</h3>
          </Link>
        </li>
        <li class="footer-column scale">
          <Link href="/apps">
            <h3>Apps</h3>
          </Link>
        </li>
        <li class="footer-column scale">
          <Link href="/career">
            <h3>Career</h3>
          </Link>
        </li>
        <li class="footer-column scale">
          <Link href="/account">
            <h3>Account</h3>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default SiteIndex
