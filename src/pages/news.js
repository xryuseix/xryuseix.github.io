import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Meta from "../components/meta"

const SiteIndex = ({ location }) => {
  const siteTitle = "News"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>News</h1>
      <Meta
        title="news"
      />
    </Layout>
  )
}

export default SiteIndex
