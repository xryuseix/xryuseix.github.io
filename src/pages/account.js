import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'

const SiteIndex = ({ location }) => {
  const siteTitle = 'Account'
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>Account</h1>
      <Meta title="Account" />
    </Layout>
  )
}

export default SiteIndex
