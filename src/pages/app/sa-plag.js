import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Meta from "../../components/meta"

const SiteIndex = ({ location }) => {
  const siteTitle = "SA-Plag"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>SA-Plag</h1>
      <Meta
        title="SA-Plag"
      />
    </Layout>
  )
}

export default SiteIndex
