import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from 'src/components/templates/layout'
import Const from 'src/const'

const { META, PAGE } = Const

export default function BlogListPage({
  data, 
}) {
  return (
    <>
      <Helmet
        title={`${PAGE.BLOG_LIST.NAME} - ${META.TITLE}`}
        meta={[
          { name: 'description', content: `${PAGE.BLOG_LIST.DESCRIPTION}` },
          { name: 'keywords', content: `${META.KEYWORDS}` },
        ]}
      >
        <html lang='ja' />
      </Helmet>
      <Layout>
        <ul>
          {data.allMarkdownRemark.edges.map((blog, i) => {
            const { date, path, title } = blog.node.frontmatter
            return (
              <li key={i}>
                <a href={path}>{title}</a>
                date: {date}
              </li>
            )
          })}
        </ul>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
     }
  }
`
