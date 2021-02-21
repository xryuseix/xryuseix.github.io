import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'
import { StaticImage } from 'gatsby-plugin-image'
import saplagDemo from '../images/saplag/sa-plag_demo.gif'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './apps.css'

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Applications" description="過去に作ったアプリケーションのまとめです．" />
      <Meta title="Applications" />
      <h1>Applications</h1>
      <br />
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

      <br />

      <div id="sa_plag">
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
                    <Link href="https://github.com/xryuseix/SA-Plag" target="_blank" rel="noopener noreferrer">
                      <StaticImage
                        src="../../static/icons/GitHub.png"
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
      </div>
      <hr />
      <div id="xryuseix_judge">
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
      </div>
    </Layout>
  )
}

export default SiteIndex
