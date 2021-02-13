import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Meta from "../../components/meta"
import { Link } from "gatsby"

const SiteIndex = ({ location }) => {
  const siteTitle = "SA-Plag"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>SA-Plag</h1>
      <Meta title="SA-Plag" />
      <h3><Link href="https://sa-plag.herokuapp.com">公開先はこちら</Link></h3>
    </Layout>
  )
}

export default SiteIndex
