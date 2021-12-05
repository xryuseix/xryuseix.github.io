import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title?: string
  description?: string
  lang?: string
  image?: string
}

const defaultImage = 'https://raw.githubusercontent.com/xryuseix/xryuseix.github.io/master/images/toppage.png'

const SEO: React.VFC<SEOProps> = ({ title = '', description = '', lang = 'ja', image = defaultImage }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription: string = description || site.siteMetadata.description
  const defaultTitle: string = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ''}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          property: 'og:image',
          content: image
        }
      ]}
    />
  )
}

export default SEO
