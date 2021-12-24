import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'

import '../utils/global.css'
import './layout.css'

type LayoutProps = {
  location: Location
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const rootPath: string = `${__PATH_PREFIX__}/`
  const isRootPath: boolean = props.location.pathname === rootPath
  const center: React.CSSProperties = {
    textAlign: 'center'
  }

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
        <main>{props.children}</main>
      </div>
      <div style={center}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
