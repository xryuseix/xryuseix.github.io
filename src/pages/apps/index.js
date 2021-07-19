import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Meta from '../../components/meta'
import { StaticImage } from 'gatsby-plugin-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './apps.css'

/**
 * コンテンツを一括importして動的に呼び出せるようにする
 * @param reqContent require.contextの返り値
 */
function importAll(reqContent) {
  let items = {}
  reqContent.keys().map((item) => (items[item.replace('./', '')] = reqContent(item)))
  return items
}
const images = importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/))

/* 配列をシャッフル */
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/* アプリケーションリスト */
const AppData = shuffle([
  {
    appId: 'sa_plag',
    appLink: '/sa-plag',
    imageSrc: 'saplag/sa-plag_demo.png',
    imageAlt: 'SA-Plag Demo',
    appTitle: 'SA-Plag',
    appDesc: `ソースコードの盗作を判定するWeb APIです．\nAIが競技プログラミングのソースコードを学習しました．`,
    webPageLink: '/apps/sa-plag',
    githubLink: 'https://github.com/xryuseix/SA-Plag'
  },
  {
    appId: 'xryuseix_judge',
    appLink: '/contest_judge',
    imageSrc: 'xryuseix_judge.png',
    imageAlt: 'xryuseix judge',
    appTitle: 'xryuseix judge',
    appDesc: '簡易的なクイズの成績判定システムです． 立命館大学プロジェクト連合合同イベントなどで使用しました．',
    webPageLink: '/apps/contest_judge',
    githubLink: ''
  },
  {
    appId: 'zoomg',
    appLink: 'https://github.com/Tsuku43/zoomg',
    imageSrc: 'zoomg/zoomg.png',
    imageAlt: 'zoomg',
    appTitle: 'zoomg',
    appDesc: 'バーチャル背景適用済み動画から部屋の画像を復元するライブラリ',
    webPageLink: '',
    githubLink: 'https://github.com/Tsuku43/zoomg'
  },
  {
    appId: 'cpstt',
    appLink: 'https://github.com/Tsuku43/zoomg',
    imageSrc: 'cpstt/cpstt_logo.png',
    imageAlt: 'Competitive Programming Stress Test Tools',
    appTitle: 'Competitive Programming Stress Test Tools',
    appDesc: '競技プログラミング用 ストレステストツール',
    webPageLink: '',
    githubLink: 'https://github.com/xryuseix/CPSTT'
  },
  {
    appId: 'ProofLeader',
    appLink: 'https://github.com/xryuseix/ProofLeader',
    imageSrc: 'proofLeader.png',
    imageAlt: 'ProofLeader',
    appTitle: 'ProofLeader',
    appDesc: 'markdownファイルの句読点や整数表記を修正',
    webPageLink: '',
    githubLink: 'https://github.com/xryuseix/ProofLeader'
  }
])

/* Webサイトリンク生成コンポーネント */
const WebSite = (webPageLink) => {
  if (Object.values(webPageLink).join('') === '') {
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

/* GitHubリンク生成コンポーネント */
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

const Apps = ({ appId, appLink, imageSrc, imageAlt, appTitle, appDesc, webPageLink, githubLink }) => {
  return (
    <div id={appId}>
      <table style={{ margin: '30px 0px' }}>
        <tr>
          <td
            style={{
              width: '50%',
              'margin-left': 'auto',
              'text-align': 'center'
            }}
          >
            <Link to={appLink}>
              <img
                src={images[imageSrc].default}
                alt={imageAlt}
                style={{ 'max-width': '100%', 'max-height': '250px' }}
              />
            </Link>
          </td>{' '}
          <td valign="top">
            <table
              style={{
                margin: '0px 0px 0px 10px',
                'border-collapse': 'separate',
                'border-spacing': '0px 10px'
              }}
            >
              <tr align="center">
                <th colspan="2" style={{ 'font-size': '2em' }}>
                  {appTitle}
                </th>
              </tr>
              <tr>
                <td colspan="2" style={{ 'white-space': 'pre-wrap' }}>
                  {appDesc}
                </td>
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
}

/* もくじのコンポーネント */
const Summary = () => {
  return (
    <details className="apps_details">
      <summary>もくじ</summary>
      <ul>
        {AppData.map((data) => (
          <li>
            <AnchorLink href={`#${data.appId}`} offset="50">
              {data.appTitle}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </details>
  )
}

const AppSiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Applications" description="過去に作ったアプリケーションのまとめです．" />
      <Meta title="Applications" />
      <h1>Applications</h1>
      <p>過去に作ったアプリケーションを一部紹介します</p>
      <Summary />
      {AppData.map((data) => (
        <Apps {...data} />
      ))}
    </Layout>
  )
}

export default AppSiteIndex
