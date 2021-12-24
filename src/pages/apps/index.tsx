import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Meta from '../../components/meta'
import importAll from '../../components/importAll'
import { AppData, AppsProps } from '../../components/data/appList'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { MdOpenInNew } from 'react-icons/md'
import './apps.css'

const images = importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/))
const icons = importAll(require.context('../../../static/icons', false, /(icon-32x32|github)\.png$/))

type ReferenceProps = {
  title: string
  link: string
  logo: string
}

/* Webページ・GitHubリンク生成コンポーネント */
const ReferenceLink: React.VFC<ReferenceProps> = (props: ReferenceProps) => {
  if (Object.values(props.link).join('') === '') {
    return <td className="apps_desc_link"></td>
  } else {
    return (
      <td className="apps_desc_link">
        <a href={Object.values(props.link).join('')} target="_blank" rel="noopener noreferrer">
          <img src={icons[`${props.logo}.png`]?.default} alt={props.logo} className="apps_desc_link_col" />
          {props.title}
          {props.title === 'GitHub' ? <MdOpenInNew /> : ''}
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

const Apps: React.VFC<AppsProps> = (props: AppsProps): JSX.Element => {
  return (
    <div id={props.appId}>
      <table className="apps_table">
        <tr>
          <td className="apps_image_col">
            <Link to={props.webPageLink}>
              <img src={images[props.imageSrc]?.default} alt={props.appTitle} className="apps_image" />
            </Link>
          </td>{' '}
          <td valign="top" style={{ textAlign: 'center' }}>
            <table className="apps_title_desc">
              <tr>
                <th colSpan={2} className="apps_title">
                  {props.appTitle}
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="apps_desc">
                  {props.appDesc}
                </td>
              </tr>
              <tr>
                <ReferenceLink link={props.webPageLink} title="Webサイト" logo="icon-32x32" />
                <ReferenceLink link={props.githubLink} title="GitHub" logo="github" />
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
const Summary: React.VFC = (): JSX.Element => {
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

type AppPageProps = {
  location: Location
}

const AppPageIndex: React.VFC<AppPageProps> = (props: AppPageProps) => {
  return (
    <Layout location={props.location}>
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

export default AppPageIndex
