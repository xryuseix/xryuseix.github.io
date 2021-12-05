import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Meta from '../components/meta'
import AchievementData from '../components/achivementData'
import { ContentProp, ContentProps, ContentsProps } from '../components/achivementData'

import { MdOpenInNew } from 'react-icons/md'

import './achievement.css'

/* 
  Achievement の各項目を出力
  year ... 実績を出した年
  detail ... 実績内容
  url ... URL
*/
const AchievesContent: React.VFC<ContentProp> = (props: ContentProp) => {
  return (
    <tr className="achievement_content">
      <td className="achievement_year">{props.year}</td>
      <td className="achievement_detail">{props.detail}</td>
      <td className="achievement_url">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          Link
          <MdOpenInNew />
        </a>
      </td>
    </tr>
  )
}

/* 
 Achievement の表の全てを出力
 title ... 項目名
 content ... 表の行(実績の内容)
*/

const Achieves: React.VFC<ContentsProps> = (props: ContentsProps) => {
  return (
    <>
      <h2>{props.title}</h2>
      <table className="achievement_table">
        <tr className="achievement_title">
          <th className="achievement_year">年</th>
          <th className="achievement_detail">内容</th>
          <th className="achievement_url">URL</th>
        </tr>
        {props.content.map((data: ContentProp) => (
          <AchievesContent {...data} />
        ))}
      </table>
    </>
  )
}

interface AchievetPageProps {
  location: Location
}

const AchievePageIndex: React.VFC<AchievetPageProps> = (props: AchievetPageProps) => {
  return (
    <Layout location={props.location}>
      <Seo title="All posts" description="過去の実績について記載します．" />
      <Meta title="Achievement" />
      <h1>Achievement</h1>
      <p>過去の実績について記載します</p>
      {AchievementData.map((data: ContentsProps) => (
        <Achieves {...data} />
      ))}
    </Layout>
  )
}

export default AchievePageIndex
