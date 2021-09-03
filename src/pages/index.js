import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Meta from '../components/meta'

import { StaticImage } from 'gatsby-plugin-image'

import './index.css'

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="xryuseix" description="ここがトップページや！！！！！！！！！" />
      <Meta title="Home" />
      <div className="index_flexbox">
        <div className="index_icon">
          <StaticImage src="../../static/favicons/icon-256x256.png" alt="icon" style={{ 'border-radius': '50%' }} />
        </div>
        <section style={{ padding: '20px' }}>
          <div className="index_rotate" style={{ 'font-size': '3em' }}>
            <h3 style={{ margin: '0px' }}>Programmer</h3>
            <span className="index_front">xryuseix</span>
            <span className="index_back">Ryusei&nbsp;Ishikawa</span>
          </div>
          <div className="index_box">
            <span className="index_box-title">Study</span>
            Algorithm &amp; Security
          </div>
          <div className="index_box">
            <span className="index_box-title">College</span>
            Ritsumeikan University
          </div>
        </section>
      </div>

      <ul className="index_footer-menu">
        <li className="index_footer-column index_scale">
          <Link to="/apps">
            <h3>Apps</h3>
          </Link>
        </li>
        <li className="index_footer-column index_scale">
          <Link to="/achievement">
            <h3>Achieve</h3>
          </Link>
        </li>
        <li className="index_footer-column index_scale">
          <Link to="/account">
            <h3>Account</h3>
          </Link>
        </li>
        <li className="index_footer-column index_scale">
          <Link to="/ctf">
            <h3>CTF</h3>
          </Link>
        </li>
        <li className="index_footer-column index_scale">
          <Link to="/lt">
            <h3>Slides</h3>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default SiteIndex
