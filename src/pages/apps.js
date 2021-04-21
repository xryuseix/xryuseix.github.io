import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'
import { StaticImage } from 'gatsby-plugin-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './apps.css'

// 配列をシャッフル
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// アプリケーションリスト
const AppData = shuffle([
  {
    appId: 'sa_plag',
    appLink: '/apps/sa-plag',
    imageSrc: '../images/saplag/sa-plag_demo.png',
    imageAlt: 'SA-Plag Demo',
    appTitle: 'SA-Plag',
    appDesc: 'ソースコードの盗作を判定するWeb APIです．<br />AIが競技プログラミングのソースコードを学習しました．',
    webPageLink: '/apps/sa-plag',
    githubLink: 'https://github.com/xryuseix/SA-Plag'
  },
  {
    appId: 'xryuseix_judge',
    appLink: '/apps/contest_judge',
    imageSrc: '../images/xryuseix_judge.png',
    imageAlt: 'xryuseix judge',
    appTitle: 'xryuseix judge',
    appDesc: '簡易的なクイズの成績判定システムです． 立命館大学プロジェクト連合合同イベントなどで使用しました．',
    webPageLink: '/apps/contest_judge',
    githubLink: ''
  },
  {
    appId: 'zoomg',
    appLink: 'https://github.com/Tsuku43/zoomg',
    imageSrc: '../images/zoomg/zoomg.png',
    imageAlt: 'zoomg',
    appTitle: 'zoomg',
    appDesc: 'バーチャル背景適用済み動画から部屋の画像を復元するライブラリ',
    webPageLink: '',
    githubLink: 'https://github.com/Tsuku43/zoomg'
  }
])

const WebSite = (webPageLink) => {
  if (webPageLink === '') {
    return <td style={{ width: '50%' }}></td>
  } else {
    return (
      <td style={{ width: '50%' }}>
        <a href={Object.values(webPageLink).join('')}>
          <StaticImage
            src="../../static/favicons/icon-32x32.png"
            alt="favicon"
            style={{ width: '1em', margin: '0px 0.3em 0px 0px' }}
          />
          Webサイト
        </a>
      </td>
    )
  }
}

const GitHub = (githubLink) => {
  if (Object.values(githubLink).join('') === '') {
    return <td style={{ width: '50%' }}></td>
  } else {
    return (
      <td style={{ width: '50%' }}>
        <a href={Object.values(githubLink).join('')} target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../../static/icons/GitHub.png"
            alt="GitHub logo"
            style={{ width: '1em', margin: '0px 0.3em 0px 0px' }}
          />
          GitHub
        </a>
      </td>
    )
  }
}

/*
 アプリケーション管理
 appId ... 固有ID
 appPageLink ... アプリケーションのリンク
 imageSrc ... 画像のリンク
 imageAlt ... 画像
 appTitle ... タイトル
 appDesc ... 説明
 webPageLink ... Webページのリンク
 githubLink ... GitHubのリンク
*/

const Apps = ({ appId, appLink, imageSrc, imageAlt, appTitle, appDesc, webPageLink, githubLink }) => (
  <div id={appId}>
    <table style={{ margin: '30px 0px' }}>
      <tr>
        <td style={{ width: '50%' }}>
          <Link to={appLink}>
            <img src={imageSrc} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
          </Link>
        </td>{' '}
        <td valign="top">
          <table style={{ margin: '0px 0px 0px 10px' }}>
            <tr align="center">
              <th colspan="2" style={{ 'font-size': '2em' }}>
                {appTitle}
              </th>
            </tr>
            <tr>
              <td colspan="2">{appDesc}</td>
            </tr>
            <tr align="center">
              <WebSite {...webPageLink} />
              <GitHub {...githubLink} />
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <hr />
  </div>
)

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Applications" description="過去に作ったアプリケーションのまとめです．" />
      <Meta title="Applications" />
      <h1>Applications</h1>
      <p>過去に作ったアプリケーションを一部紹介します</p>
      <details>
        <summary>もくじ</summary>
        <ul>
          <li>
            <AnchorLink href="#sa_plag" offset="50">
              SA-Plag
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#xryuseix_judge" offset="50">
              xryuseix judge
            </AnchorLink>
          </li>
        </ul>
      </details>

      {AppData.map((data) => (
        <Apps {...data} />
      ))}
    </Layout>
  )
}

export default SiteIndex
