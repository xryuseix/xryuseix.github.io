import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'

import Meta from '../components/meta'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPageIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location}>
      <Seo title="All posts" description="このホームページの最新情報や最近の活動について記述します．" />
      <Meta title="news" />
      <h1>News</h1>
      <p>このページの新機能やブログの投稿，ちょっとしたニュースをここに記載します</p>
      <ol style={{ listStyle: 'none' }}>
        {posts.map((post) => {
          const title = post.frontmatter?.title || post.fields?.slug

          return (
            <li key={post.fields?.slug}>
              <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                <header>
                  <h2>
                    <Link to={post.fields?.slug || '/'} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter?.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter?.description || post.excerpt || ''
                    }}
                    itemProp="description"
                  />
                </section>
                <hr />
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPageIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
