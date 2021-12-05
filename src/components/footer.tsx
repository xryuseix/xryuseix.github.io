import React from 'react'

interface FooterProps {
  className?: string
}

const noneStyle: React.CSSProperties = {
  display: 'none'
}

const Footer: React.VFC<FooterProps> = (_Props: FooterProps) => (
  <footer>
    <img src="https://www.f-counter.net/j/45/1613887388/" alt="アクセスカウンター" style={noneStyle} />©{' '}
    {new Date().getFullYear()}, Ryusei Ishikawa All Right Reserved.
  </footer>
)

export default Footer
