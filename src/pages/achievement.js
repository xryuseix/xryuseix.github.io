import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'

import VULNLIST from '../utils/ipaVulnerability/vulnList'
import VULNNUM from '../utils/ipaVulnerability/vulnNum'

import './achievement.css'
import icssBagde from '../images/badges/icss.svg'

const SchoolData = [
  {
    year: '2013-2019',
    detail: '神奈川県立平塚中等教育学校',
    url: 'https://www.pen-kanagawa.ed.jp/hiratsuka-chuto-ss/'
  },
  {
    year: '2019-',
    detail: '立命館大学 情報理工学部 セキュリティ・ネットワークコース',
    url: 'http://www.ritsumei.ac.jp/'
  }
]

const WorkData = [
  {
    year: '2018',
    detail: '総務省 地域におけるIoTの学び推進事業地域実証事業 メンター',
    url: 'https://www.soumu.go.jp/main_content/000605601.pdf'
  },
  {
    year: '2020-',
    detail: 'paiza株式会社 学習事業部 業務委託契約',
    url: 'https://www.paiza.co.jp/'
  }
]

const EventData = [
  {
    year: '2019',
    detail: 'セキュリティ・キャンプ全国大会2019 集中開発コース 暗号化通信ゼミ',
    url: 'https://www.ipa.go.jp/jinzai/camp/2019/zenkoku2019_vote.html'
  },
  {
    year: '2020-2021',
    detail: '若手セキュリティイノベーター育成プログラム SecHack365 研究駆動コース',
    url: 'https://sechack365.nict.go.jp/'
  },
  {
    year: 2020,
    detail: (
      <>
        AVTOKYO 2020 Talks
        <details>
          <summary>発表テーマ</summary>
          <ul>
            <li>
              [jp] ビデオチャットの映像から部屋が盗み見られる！？
              バーチャル背景適用済み映像から部屋の画像を復元する手法とその自動化 (石川 琉聖, 辻 知希)
            </li>
          </ul>
        </details>
      </>
    ),
    url: 'https://www.avtokyo.org/2020'
  },
  {
    year: 2021,
    detail: (
      <>
        情報通信システムセキュリティ研究会（ICSS）
        <details>
          <summary>研究テーマ</summary>
          <ul>
            <li>
              <img src={icssBagde} style={{ height: '1.4em' }} alt="ICSS badge" />
              「仮想背景を使用したリモート会議映像における秘匿された背景の再構築手法」
              ○辻知希，石川琉聖（立命館大）・衛藤将史（NICT）・服部祐一（セキュアサイクル）・井上博之（広島市大）
            </li>
            <li>
              「プログラミングコンテストにおけるソースコードの盗作検知手法の実装と評価」
              ○石川琉聖（立命館大）・服部祐一（セキュアサイクル）・井上博之（広島市大）・猪俣敦夫（阪大）
            </li>
          </ul>
        </details>
      </>
    ),
    url:
      'https://www.ieice.org/ken/program/index.php?tgs_regid=4674e49d7365cbd99b30867d8c415e9417ba71c10dcd35acf8e0ca9a9d813f1b&tgid=IEICE-ICSS'
  },
  {
    year: '2021',
    detail: 'ICPC アジア地区横浜大会',
    url: 'https://icpc.iisf.or.jp/2020-yokohama/domestic/'
  }
]

const MediaData = [
  {
    year: '2021',
    detail: 'サイバーセキュリティⅡ 第２回 情報セキュリティ教育と人材育成 BS231ch',
    url: 'https://www.ouj.ac.jp/hp/o_itiran/2021/0205.html'
  }
]

const HackData = [
  {
    year: '2020-',
    detail: (
      <>
        IPA 脆弱性関連情報届出受理 <VULNNUM />件
        <details>
          <summary>取得番号一覧</summary>
          <VULNLIST />
        </details>
      </>
    ),
    url: 'https://www.ipa.go.jp/security/vuln/report/'
  }
]

const QualificationData = [
  {
    year: '2017',
    detail: 'ITパスポート',
    url: 'https://www3.jitec.ipa.go.jp/JitesCbt/index.html'
  },
  {
    year: '2017',
    detail: '実用数学技能検定 2級',
    url: 'https://www.su-gaku.net/suken/'
  },
  {
    year: '2018',
    detail: '応用情報技術者',
    url: 'https://www.jitec.ipa.go.jp/1_11seido/ap.html'
  },
  {
    year: '2020',
    detail: 'TOEIC 610点',
    url: 'https://www.iibc-global.org/toeic.html'
  }
]

/* 
 Achievement の各項目を出力
 year ... 実績を出した年
 detail ... 実績内容
 url ... URL
*/
const AchievesContent = ({ year, detail, url }) => {
  return (
    <tr class="content">
      <td class="year">{year}</td>
      <td class="detail">{detail}</td>
      <td class="url">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </td>
    </tr>
  )
}

const AchievementData = [
  { title: 'School', Content: SchoolData },
  { title: 'Work', Content: WorkData },
  { title: 'Event', Content: EventData },
  { title: 'Media', Content: MediaData },
  { title: 'Hack', Content: HackData },
  { title: 'Qualification', Content: QualificationData }
]

/* 
 Achievement の表の全てを出力
 title ... 項目名
 Content ... 表の行(実績の内容)
*/
const Achieves = ({ title, Content }) => {
  return (
    <>
      <h2>{title}</h2>
      <table>
        <tr class="title">
          <th class="year">年</th>
          <th class="detail">内容</th>
          <th class="url">URL</th>
        </tr>
        {Content.map((data) => (
          <AchievesContent {...data} />
        ))}
      </table>
    </>
  )
}

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" description="過去の実績について記載します．" />
      <Meta title="Achievement" />
      <h1>Achievement</h1>
      <p>過去の実績について記載します</p>
      {AchievementData.map((data) => (
        <Achieves {...data} />
      ))}
    </Layout>
  )
}

export default SiteIndex
