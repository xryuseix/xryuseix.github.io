import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" description="過去の実績について記載します．" />
      <h1>Career</h1>
      <Meta title="Career" />
    </Layout>
  )
}

export default SiteIndex
