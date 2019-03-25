import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from 'src/components/organisms/header'
import GlobalStyles from 'src/global-styles'
import Const from 'src/const'

const { SIZE } = Const

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet
        title={frontmatter.title}
        meta={[
          { name: 'description', content: `${frontmatter.title} - M-TECHDESIGN - frontend engineer & track maker` },
          { name: 'keywords', content: 'frontend, engineer, track maker' },
        ]}
      >
        <html lang='ja' />
      </Helmet>
      <Header siteTitle={'M-TECHDESIGN'} />
      <Wrapper>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
      <GlobalStyles />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

const Wrapper = styled.div`
  max-width: ${SIZE.MAIN.WIDTH}px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 32px;
`