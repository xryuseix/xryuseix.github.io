import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'
import '../utils/global.css'
import './layout.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
      <div className="layout_header">
        <Header className="layout_header-menu" />
        <div className="layout_header-button">
          <StaticImage src="../images/header_button.png" alt="button" />
          <div className="layout_image-mask"></div>
        </div>
      </div>
      <br />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <div style={{ 'text-align': 'center' }}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
