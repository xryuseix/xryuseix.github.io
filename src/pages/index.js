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
/* <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
  Tailwind test
</button> */

export default SiteIndex
