import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Meta from "../components/meta"

const SiteIndex = ({ location }) => {
  const siteTitle = "Career"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>Career</h1>
      <Meta
        title="Career"
      />
    </Layout>
  )
}

export default SiteIndex
