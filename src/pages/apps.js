import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'
import { StaticImage } from 'gatsby-plugin-image'
import saplagDemo from '../images/saplag/sa-plag_demo.gif'

const SiteIndex = ({ location }) => {
  const siteTitle = '作品一覧'
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Meta title="作品一覧" />
      <h1>作品一覧</h1>
      <br />
      <h2>ここに目次</h2>
      <br />

      <table style={{ margin: '30px 0px' }}>
        <tr>
          <td style={{ width: '50%' }}>
            <Link href="/apps/sa-plag">
              <img src={saplagDemo} alt="SA-Plag Demo" style={{ width: '100%', height: 'auto' }} />
            </Link>
          </td>{' '}
          <td valign="top">
            <table style={{ margin: '0px 0px 0px 10px' }}>
              <tr align="center">
                <th colspan="2" style={{ 'font-size': '2em' }}>
                  SA-Plag
                </th>
              </tr>
              <tr>
                <td colspan="2">
                  ソースコードの盗作を判定するWeb APIです．
                  <br />
                  AIが競技プログラミングのソースコードを学習しました．
                </td>
              </tr>
              <tr align="center">
                <td style={{ width: '50%' }}>
                  <Link href="/apps/sa-plag">
                    <StaticImage
                      src="../../static/favicons/icon-32x32.png"
                      alt="favicon"
                      style={{ width: '1em', margin: '0px 0.3em 0px 0px' }}
                    />
                    Webサイト
                  </Link>
                </td>{' '}
                <td style={{ width: '50%' }}>
                  <Link href="https://github.com/xryuseix/SA-Plag" target="_blank">
                    <StaticImage
                      src="../../static/icons/GitHub-Mark-64px.png"
                      alt="GitHub logo"
                      style={{ width: '1em', margin: '0px 0.3em 0px 0px' }}
                    />
                    GitHub
                  </Link>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <hr />
      <table style={{ margin: '30px 0px' }}>
        <tr>
          <td style={{ width: '50%' }}>
            <Link href="/apps/contest_judge">
              <StaticImage
                src="../images/xryuseix_judge.png"
                alt="xryuseix judge"
                style={{ width: '100%', height: 'auto' }}
              />
            </Link>
          </td>{' '}
          <td valign="top">
            <table style={{ margin: '0px 0px 0px 10px' }}>
              <tr align="center">
                <th colspan="2" style={{ 'font-size': '2em' }}>
                  xryuseix judge
                </th>
              </tr>
              <tr>
                <td colspan="2">
                  簡易的なクイズの成績判定システムです． 立命館大学プロジェクト連合合同イベントなどで使用しました．
                </td>
              </tr>
              <tr align="center">
                <td style={{ width: '50%' }}>
                  <Link href="/apps/contest_judge">
                    <StaticImage
                      src="../../static/favicons/icon-32x32.png"
                      alt="favicon"
                      style={{ width: '1em', margin: '0px 0.3em 0px 0px' }}
                    />
                    Webサイト
                  </Link>
                </td>{' '}
                <td style={{ width: '50%' }}></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </Layout>
  )
}

export default SiteIndex
