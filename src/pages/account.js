import React from 'react'

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
      <p>各サービスのアカウントです</p>
      <div className="account_logos">
        <div className="account_logo">
          <div className="account_service">Twitter</div>
          <a href="https://twitter.com/ryusei_ishika" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/twitter.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">@ryusei_ishika</div>
          </a>
        </div>

        <div className="account_logo">
          <div className="account_service">GitHub</div>
          <a href="https://github.com/xryuseix" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/GitHub.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">Facebook</div>
          <a href="https://www.facebook.com/profile.php?id=100010586593125" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/facebook.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">100010586593125</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">Qiita</div>
          <a href="https://qiita.com/xryuseix" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/qiita.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">はてなブログ</div>
          <a href="https://xryuseix.hatenablog.com/" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/hatena.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">AtCoder</div>
          <a href="https://atcoder.jp/users/xryuseix" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/atcoder.svg" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">Codeforces</div>
          <a href="https://codeforces.com/profile/xryuseix" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/noimage.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">leetcode</div>
          <a href="https://leetcode.com/xryuseix/" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/noimage.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">slideshare</div>
          <a href="https://www.slideshare.net/IshikawaRyusei" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/slideshare.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">connpass</div>
          <a href="https://connpass.com/user/xryuseix/" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/connpass.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">Instagram</div>
          <a href="https://www.instagram.com/ryusei_ishika/" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/noimage.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">ryusei_ishika</div>
          </a>
        </div>
        <div className="account_logo">
          <div className="account_service">Discord</div>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
            <div className="account_service-logo">
              <StaticImage src="../../static/icons/noimage.png" alt="logo" style={imageStyle} />
            </div>
            <div className="account_userid">xryuseix#9439</div>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default SiteIndex

const imageStyle = { 'max-width': '80px', 'max-height': '80px' }
