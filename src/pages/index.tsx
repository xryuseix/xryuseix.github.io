import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Meta from '../components/meta'

import { StaticImage } from 'gatsby-plugin-image'

import './index.css'

const faviconStyle: React.CSSProperties = {
  borderRadius: '50%'
}

const Profile: React.VFC = () => {
  return (
    <div className="index_flexbox">
      <div className="index_icon">
        <StaticImage src="../../static/favicons/icon-256x256.png" alt="icon" style={faviconStyle} />
      </div>
      <section style={{ padding: '20px' }}>
        <div className="index_rotate">
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
  )
}

const BottomButtons: React.VFC = () => {
  return (
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
  )
}

interface IndexPageProps {
  location: Location
}

const SiteIndex: React.VFC<IndexPageProps> = (Props: IndexPageProps) => {
  return (
    <Layout location={Props.location}>
      <Seo title="xryuseix" description="ここがトップページや！！！！！！！！！" />
      <Meta title="Home" />
      <Profile />
      <BottomButtons />
    </Layout>
  )
}

export default SiteIndex
