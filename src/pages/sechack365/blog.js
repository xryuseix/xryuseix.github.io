import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Meta from '../../components/meta'
import { StaticImage } from 'gatsby-plugin-image'
import './blog.css'

const SiteIndex = ({ location }) => {
  const siteTitle = 'sh365 blog'
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" description="2020年度にSecHack365に参加したトレーニーによる参加ブログのまとめです．" />
      <Meta title="SH365 Blog" />
      <Helmet>
        <script type='text/javascript'>
        {`document.location="https://sechack365-fans.github.io/blog"`}
        </script>
      </Helmet>
    </Layout>
  )
}

export default SiteIndex
