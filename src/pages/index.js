import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Meta from "../components/meta"

const SiteIndex = ({ location }) => {
  const siteTitle = "サイトタイトル"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <h1>Hello INDEX</h1>
      <Meta
        title="トップページ"
        desc="Gatsby.jsの使い方を説明するためのサンプルページです。"
      />
      <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
        Tailwind test
      </button>
    </Layout>
  )
}

export default SiteIndex
