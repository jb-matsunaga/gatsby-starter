import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from 'src/components/templates/layout'
import ArticleCard from 'src/components/molecules/article-card'
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
        <CardList>
          {data.allMarkdownRemark.edges.map((blog, i) => {
            const { title, date, author, excerpt, path, tags } = blog.node.frontmatter
            return (
              <li key={i}>
                <ArticleCard
                  title={title}
                  date={date}
                  author={author}
                  excerpt={excerpt}
                  path={path}
                  tags={tags}
                />
              </li>
            )
          })}
        </CardList>
      </Layout>
    </>
  )
}

const CardList = styled.ul`

  > li {
    margin-bottom: 16px;
  }
`

export const pageQuery = graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            author
            excerpt
            path
            tags
          }
        }
      }
    }
  }
`
