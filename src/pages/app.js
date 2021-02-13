import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Meta from "../components/meta"

const SiteIndex = ({ location }) => {
  const siteTitle = "作品一覧"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>作品一覧</h1>
      <Meta
        title="作品一覧"
      />
    </Layout>
  )
}

export default SiteIndex
