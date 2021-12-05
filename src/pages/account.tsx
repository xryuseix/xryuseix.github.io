import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Meta from '../components/meta'
import importAll from '../components/importAll'

import Account from '../../static/json/account.json'
import './account.css'

interface AccountPageProps {
  location: Location
}

interface AccountData {
  service: string
  url: string
  image: string
  userId: string
}

const imageStyle: React.CSSProperties = { maxWidth: '80px', maxHeight: '80px' }

const AccountPageIndex: React.VFC<AccountPageProps> = (Props: AccountPageProps) => {
  const images = importAll(require.context('../../static/icons', false, /\.(png|jpe?g|svg)$/))
  return (
    <Layout location={Props.location}>
      <Seo title="All posts" description="各Webページのアカウントについて記載します．" />
      <Meta title="Account" />
      <h1>Account</h1>
      <p>各サービスのアカウントです</p>
      <div className="account_logos">
        {Account.map((data: Readonly<AccountData>) => (
          <div className="account_logo">
            <div className="account_service">{data.service}</div>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <div className="account_service-logo">
                <img src={images[data.image]?.default} alt={data.service} style={imageStyle} />
              </div>
              <div className="account_userid">{data.userId}</div>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default AccountPageIndex
