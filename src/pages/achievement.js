import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'
import VULNLIST from '../utils/ipaVulnerability/vulnList'
import VULNNUM from '../utils/ipaVulnerability/vulnNum'

import './achievement.css'

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" description="過去の実績について記載します．" />
      <Meta title="Achievement" />
      <h1>Achievement</h1>
      <p>過去の実績について記載します</p>
      <h2>School</h2>
      <table>
        <tr class="title">
          <th class="year">年</th>
          <th class="detail">内容</th>
          <th class="url">URL</th>
        </tr>
        <tr class="content">
          <td class="year">2013-2019</td>
          <td class="detail">神奈川県立平塚中等教育学校</td>
          <td class="url">
            <Link href="https://www.pen-kanagawa.ed.jp/hiratsuka-chuto-ss/" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2019-</td>
          <td class="detail">立命館大学 情報理工学部 セキュリティ・ネットワークコース</td>
          <td class="url">
            <Link href="http://www.ritsumei.ac.jp/" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
      </table>
      <h2>Work</h2>
      <table>
        <tr class="title">
          <th class="year">年</th>
          <th class="detail">内容</th>
          <th class="url">URL</th>
        </tr>
        <tr class="content">
          <td class="year">2018</td>
          <td class="detail">総務省 地域におけるIoTの学び推進事業地域実証事業 メンター</td>
          <td class="url">
            <Link href="https://www.soumu.go.jp/main_content/000605601.pdf" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2020-</td>
          <td class="detail">paiza株式会社 学習事業部 アルバイト</td>
          <td class="url">
            <Link href="https://paiza.jp/" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
      </table>
      <h2>Event</h2>
      <table>
        <tr class="title">
          <th class="year">年</th>
          <th class="detail">内容</th>
          <th class="url">URL</th>
        </tr>
        <tr class="content">
          <td class="year">2019</td>
          <td class="detail">セキュリティ・キャンプ全国大会2019 集中開発コース 暗号化通信ゼミ</td>
          <td class="url">
            <Link
              href="https://www.ipa.go.jp/jinzai/camp/2019/zenkoku2019_vote.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2020-2021</td>
          <td class="detail">若手セキュリティイノベーター育成プログラム SecHack365 研究駆動コース</td>
          <td class="url">
            <Link href="https://sechack365.nict.go.jp/" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2020</td>
          <td class="detail">AVTOKYO 2020 Talks</td>
          <td class="url">
            <Link href="https://www.avtokyo.org/2020" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2021</td>
          <td class="detail">
            情報通信システムセキュリティ研究会（ICSS）
            <details>
              <summary>研究テーマ</summary>
              <ul>
                <li>「仮想背景を使用したリモート会議映像における秘匿された背景の再構築手法」 ○辻知希，石川琉聖（立命館大）・衛藤将史（NICT）・服部祐一（セキュアサイクル）・井上博之（広島市大）</li>
                <li>「プログラミングコンテストにおけるソースコードの盗作検知手法の実装と評価」 ○石川琉聖（立命館大）・服部祐一（セキュアサイクル）・井上博之（広島市大）・猪俣敦夫（阪大）</li>
              </ul>
            </details>
          </td>
          <td class="url">
            <Link
              href="https://www.ieice.org/ken/program/index.php?tgs_regid=4674e49d7365cbd99b30867d8c415e9417ba71c10dcd35acf8e0ca9a9d813f1b&amp;tgid=IEICE-ICSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2021</td>
          <td class="detail">ICPC アジア地区横浜大会</td>
          <td class="url">
            <Link href="https://icpc.iisf.or.jp/2020-yokohama/domestic/" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
      </table>
      <h2>Media</h2>
      <table>
        <tr class="title">
          <th class="year">年</th>
          <th class="detail">内容</th>
          <th class="url">URL</th>
        </tr>
        <tr class="content">
          <td class="year">2021</td>
          <td class="detail">サイバーセキュリティⅡ 第２回 情報セキュリティ教育と人材育成 BS231ch</td>
          <td class="url">
            <Link href="https://www.ouj.ac.jp/hp/o_itiran/2021/0205.html" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
      </table>
      <h2>Hack</h2>
      <table>
        <tr class="title">
          <th class="year">年</th>
          <th class="detail">内容</th>
          <th class="url">URL</th>
        </tr>
        <tr class="content">
          <td class="year">2020-</td>
          <td class="detail">
            IPA 脆弱性関連情報届出受理 <VULNNUM />件
            <details>
              <summary>取得番号一覧</summary>
              <VULNLIST />
            </details>
          </td>
          <td class="url">
            <Link href="https://www.ipa.go.jp/security/vuln/report/" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
      </table>
      <h2>Qualification</h2>
      <table>
        <tr class="title">
          <th class="year">年</th>
          <th class="detail">内容</th>
          <th class="url">URL</th>
        </tr>
        <tr class="content">
          <td class="year">2017</td>
          <td class="detail">ITパスポート</td>
          <td class="url">
            <Link href="https://www3.jitec.ipa.go.jp/JitesCbt/index.html" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2017</td>
          <td class="detail">実用数学技能検定 2級</td>
          <td class="url">
            <Link href="https://www.su-gaku.net/suken/" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2018</td>
          <td class="detail">応用情報技術者</td>
          <td class="url">
            <Link href="https://www.jitec.ipa.go.jp/1_11seido/ap.html" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
        <tr class="content">
          <td class="year">2020</td>
          <td class="detail">TOEIC 610点</td>
          <td class="url">
            <Link href="https://www.iibc-global.org/toeic.html" target="_blank" rel="noopener noreferrer">
              Link
            </Link>
          </td>
        </tr>
      </table>
    </Layout>
  )
}

export default SiteIndex
