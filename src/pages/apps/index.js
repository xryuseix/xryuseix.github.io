import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Meta from '../../components/meta'
import importAll from '../../components/importAll'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './apps.css'

const images = importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/))
const icons = importAll(require.context('../../../static/icons', false, /(icon-32x32|github)\.png$/))

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
    appTitle: 'SA-Plag',
    appDesc: `ソースコードの盗作を判定するWeb APIです．\nAIが競技プログラミングのソースコードを学習しました．`,
    webPageLink: '/apps/sa-plag',
    githubLink: 'https://github.com/xryuseix/SA-Plag'
  },
  {
    appId: 'xryuseix_judge',
    appLink: '/contest_judge',
    imageSrc: 'xryuseix_judge.png',
    appTitle: 'xryuseix judge',
    appDesc: '簡易的なクイズの成績判定システムです． 立命館大学プロジェクト連合合同イベントなどで使用しました．',
    webPageLink: '/apps/contest_judge',
    githubLink: ''
  },
  {
    appId: 'zoomg',
    appLink: 'https://github.com/Tsuku43/zoomg',
    imageSrc: 'zoomg/zoomg.png',
    appTitle: 'zoomg',
    appDesc: 'バーチャル背景適用済み動画から部屋の画像を復元するライブラリ',
    webPageLink: '',
    githubLink: 'https://github.com/Tsuku43/zoomg'
  },
  {
    appId: 'cpstt',
    appLink: 'https://github.com/Tsuku43/zoomg',
    imageSrc: 'cpstt/cpstt_logo.png',
    appTitle: 'Competitive Programming Stress Test Tools',
    appDesc: '競技プログラミング用 ストレステストツール',
    webPageLink: '',
    githubLink: 'https://github.com/xryuseix/CPSTT'
  },
  {
    appId: 'ProofLeader',
    appLink: 'https://github.com/xryuseix/ProofLeader',
    imageSrc: 'proofLeader.png',
    appTitle: 'ProofLeader',
    appDesc: 'markdownファイルの句読点や整数表記を修正',
    webPageLink: '',
    githubLink: 'https://github.com/xryuseix/ProofLeader'
  }
])

/* Webページ・GitHubリンク生成コンポーネント */
const ReferenceLink = (props) => {
  if (Object.values(props.link).join('') === '') {
    return <td className="apps_desc_link"></td>
  } else {
    console.log(props)
    return (
      <td className="apps_desc_link">
        <a href={Object.values(props.link).join('')} target="_blank" rel="noopener noreferrer">
          {console.log(icons)}
          {console.log(`${props.logo}.png`)}
          <img src={icons[`${props.logo}.png`]?.default} alt={props.logo} className="apps_desc_link_col" />
          {props.title}
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

const Apps = ({ appId, appLink, imageSrc, appTitle, appDesc, webPageLink, githubLink }) => {
  return (
    <div id={appId}>
      <table className="apps_table">
        <tr>
          <td className="apps_image_col">
            <Link to={appLink}>
              <img src={images[imageSrc]?.default} alt={appTitle} className="apps_image" />
            </Link>
          </td>{' '}
          <td valign="top">
            <table className="apps_title_desc">
              <tr align="center">
                <th colspan="2" className="apps_title">
                  {appTitle}
                </th>
              </tr>
              <tr>
                <td colspan="2" className="apps_desc">
                  {appDesc}
                </td>
              </tr>
              <tr align="center">
                <ReferenceLink link={webPageLink} title="Webサイト" logo="icon-32x32" />
                <ReferenceLink link={githubLink} title="GitHub" logo="github" />
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
