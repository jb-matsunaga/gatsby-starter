import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from 'src/components/templates/layout'
import Const from 'src/const'

const { META } = Const

export default function BlogDetailTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <Helmet
        title={frontmatter.title}
        meta={[
          { name: 'description', content: `${frontmatter.title}` },
          { name: 'keywords', content: `${META.KEYWORDS}` },
        ]}
      >
        <html lang='ja' />
      </Helmet>
      <Layout>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        excerpt
        path
        tags
      }
    }
  }
`
