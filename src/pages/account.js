import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'

import { StaticImage } from 'gatsby-plugin-image'

import './account.css'

const SiteIndex = ({ location }) => {
  const siteTitle = 'Account'
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" description="各Webページのアカウントについて記載します．" />
      <Meta title="Account" />
      <h1>Account</h1>
      <div class="logos">
        <div class="logo">
          <div class="service">Twitter</div>
          <Link href="https://twitter.com/ryusei_ishika" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/twitter.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">@ryusei_ishika</div>
          </Link>
        </div>

        <div class="logo">
          <div class="service">GitHub</div>
          <Link href="https://github.com/xryuseix" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/GitHub.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">xryuseix</div>
          </Link>
        </div>
        <div class="logo">
          <div class="service">Facebook</div>
          <Link href="https://www.facebook.com/profile.php?id=100010586593125" target="_blank">
            <div class="service_logo">
              <StaticImage src="../../static/icons/facebook.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">100010586593125</div>
          </Link>
        </div>
        <div class="logo">
          <div class="service">Qiita</div>
          <Link href="https://qiita.com/xryuseix" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/qiita.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">xryuseix</div>
          </Link>
        </div>
        <div class="logo">
          <div class="service">はてなブログ</div>
          <Link href="https://xryuseix.hatenablog.com/" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/hatena.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">xryuseix</div>
          </Link>
        </div>
        <div class="logo">
          <div class="service">AtCoder</div>
          <Link href="https://atcoder.jp/users/xryuseix" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/noimage.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">xryuseix</div>
          </Link>
        </div>
        <div class="logo">
          <div class="service">Codeforces</div>
          <Link href="https://codeforces.com/profile/xryuseix" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/noimage.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">xryuseix</div>
          </Link>
        </div>
        <div class="logo">
          <div class="service">leetcode</div>
          <Link href="https://leetcode.com/xryuseix/" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/noimage.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">xryuseix</div>
          </Link>
        </div>
        <div class="logo">
          <div class="service">slideshare</div>
          <Link href="https://www.slideshare.net/IshikawaRyusei" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/slideshare.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">xryuseix</div>
          </Link>
        </div>
        <div class="logo">
          <div class="service">connpass</div>
          <Link href="https://connpass.com/user/xryuseix/" target="_blank" rel="noopener noreferrer">
            <div class="service_logo">
              <StaticImage src="../../static/icons/connpass.png" alt="logo" style={imageStyle} />
            </div>
            <div class="userid">xryuseix</div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default SiteIndex

const imageStyle = { 'max-width': '80px', 'max-height': '80px' }
