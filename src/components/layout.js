import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
// import { Link } from "gatsby"
import '../utils/global.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
