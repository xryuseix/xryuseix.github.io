import React from 'react'

import Layout from '../components/layout'
import Meta from '../components/meta'

const SiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Meta title="XSS Page" />
      {alert('クロスサイトしようとしてて草')}
      <h2>xryuseixCTF&#123;XSS_51y0ut051t3t3_ku54&#125;</h2>
    </Layout>
  )
}

export default SiteIndex
