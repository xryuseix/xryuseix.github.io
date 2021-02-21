import React from 'react'
import { Helmet } from 'react-helmet'

export default (props) => {
  const title = `${props.title}`
  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description"/>
      <meta charset="UTF-8" />
    </Helmet>
  )
}
