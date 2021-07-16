import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Meta from '../components/meta'

import './account.css'

const Account = [
  {
    service: 'Twitter',
    url: 'https://twitter.com/ryusei_ishika',
    image: require('../../static/icons/twitter.png').default,
    userId: '@ryusei_ishika'
  },
  {
    service: 'GitHub',
    url: 'https://github.com/xryuseix',
    image: require('../../static/icons/GitHub.png').default,
    userId: 'xryuseix'
  },
  {
    service: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100010586593125',
    image: require('../../static/icons/facebook.png').default,
    userId: '100010586593125'
  },
  {
    service: 'Qiita',
    url: 'https://qiita.com/xryuseix',
    image: require('../../static/icons/qiita.png').default,
    userId: 'xryuseix'
  },
  {
    service: 'はてなブログ',
    url: 'https://xryuseix.hatenablog.com',
    image: require('../../static/icons/hatena.png').default,
    userId: 'xryuseix'
  },
  {
    service: 'AtCoder',
    url: 'https://atcoder.jp/users/xryuseix',
    image: require('../../static/icons/atcoder.svg').default,
    userId: 'xryuseix'
  },
  {
    service: 'Codeforces',
    url: 'https://codeforces.com/profile/xryuseix',
    image: require('../../static/icons/noimage.png').default,
    userId: 'xryuseix'
  },
  {
    service: 'LeetCode',
    url: 'https://leetcode.com/xryuseix',
    image: require('../../static/icons/noimage.png').default,
    userId: 'xryuseix'
  },
  {
    service: 'SlideShare',
    url: 'https://www.slideshare.net/IshikawaRyusei',
    image: require('../../static/icons/slideshare.png').default,
    userId: 'xryuseix'
  },
  {
    service: 'connpass',
    url: 'https://connpass.com/user/xryuseix',
    image: require('../../static/icons/connpass.png').default,
    userId: 'xryuseix'
  },
  {
    service: 'Instagram',
    url: 'https://www.instagram.com/ryusei_ishika',
    image: require('../../static/icons/instagram.png').default,
    userId: 'xryuseix'
  },
  {
    service: 'Discord',
    url: 'https://discord.com',
    image: require('../../static/icons/discord.png').default,
    userId: 'xryuseix#9439'
  }
]

const AccountSiteIndex = ({ location }) => {
  const siteTitle = 'Account'
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" description="各Webページのアカウントについて記載します．" />
      <Meta title="Account" />
      <h1>Account</h1>
      <p>各サービスのアカウントです</p>
      <div className="account_logos">
        {Account.map((data) => (
          <div className="account_logo">
            <div className="account_service">{data.service}</div>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <div className="account_service-logo">
                <img src={data.image} alt="" style={{ 'max-width': '80px', 'max-height': '80px' }} />
              </div>
              <div className="account_userid">{data.userId}</div>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default AccountSiteIndex
