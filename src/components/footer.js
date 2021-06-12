import React from 'react'

const Footer = (props) => (
  <footer>
    <img
      src="https://www.f-counter.net/j/45/1613887388/"
      alt="アクセスカウンター"
      border="0"
      style={{ display: 'none' }}
    />
    © {new Date().getFullYear()}, Ryusei Ishikawa All Right Reserved.
  </footer>
)

export default Footer
