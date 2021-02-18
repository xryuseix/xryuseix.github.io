import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Meta from "../components/meta"

const SiteIndex = ({ location }) => {
  const siteTitle = "トップページ"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="xryuseix" />
      <h1>xryuseix's Home Page</h1>
      <Meta title="Home" />
    </Layout>
  )
}


export default SiteIndex
