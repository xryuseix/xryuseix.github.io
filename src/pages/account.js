import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Meta from '../components/meta'

import './account.css'

const Account = [
  {
    service: 'Twitter',
    url: 'https://twitter.com/ryusei_ishika',
    image: 'twitter.png',
    userId: '@ryusei_ishika'
  },
  {
    service: 'GitHub',
    url: 'https://github.com/xryuseix',
    image: 'github.png',
    userId: 'xryuseix'
  },
  {
    service: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100010586593125',
    image: 'facebook.png',
    userId: '100010586593125'
  },
  {
    service: 'Qiita',
    url: 'https://qiita.com/xryuseix',
    image: 'qiita.png',
    userId: 'xryuseix'
  },
  {
    service: 'はてなブログ',
    url: 'https://xryuseix.hatenablog.com',
    image: 'hatena.png',
    userId: 'xryuseix'
  },
  {
    service: 'AtCoder',
    url: 'https://atcoder.jp/users/xryuseix',
    image: 'atcoder.svg',
    userId: 'xryuseix'
  },
  {
    service: 'Codeforces',
    url: 'https://codeforces.com/profile/xryuseix',
    image: 'noimage.png',
    userId: 'xryuseix'
  },
  {
    service: 'LeetCode',
    url: 'https://leetcode.com/xryuseix',
    image: 'noimage.png',
    userId: 'xryuseix'
  },
  {
    service: 'SlideShare',
    url: 'https://www.slideshare.net/IshikawaRyusei',
    image: 'slideshare.png',
    userId: 'xryuseix'
  },
  {
    service: 'connpass',
    url: 'https://connpass.com/user/xryuseix',
    image: 'connpass.png',
    userId: 'xryuseix'
  },
  {
    service: 'Instagram',
    url: 'https://www.instagram.com/ryusei_ishika',
    image: 'instagram.png',
    userId: 'xryuseix'
  },
  {
    service: 'Discord',
    url: 'https://discord.com',
    image: 'discord.png',
    userId: 'xryuseix#9439'
  }
]

/**
 * iconを一括importして動的に呼び出せるようにする
 * @param reqContent require.contextの返り値
 */
function importAll(reqContent) {
  let images = {}
  reqContent.keys().map((item) => (images[item.replace('./', '')] = reqContent(item)))
  return images
}

const AccountSiteIndex = ({ location }) => {
  const siteTitle = 'Account'
  const images = importAll(require.context('../../static/icons', false, /\.(png|jpe?g|svg)$/))
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
                <img src={images[data.image]?.default} alt="" style={{ 'max-width': '80px', 'max-height': '80px' }} />
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
