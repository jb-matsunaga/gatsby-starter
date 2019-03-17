import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from 'src/components/organisms/header'
import Const from 'src/const'
import GlobalStyles from 'src/global-styles'

const { SIZE } = Const

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'M-TECHDESIGN - frontend engineer & track maker' },
            { name: 'keywords', content: 'frontend, engineer, track maker' },
          ]}
        >
          <html lang="ja" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>
          {children}
        </MainWrapper>
        <GlobalStyles />
      </>
    )}
  />
)

const MainWrapper = styled.main`
  max-width: ${SIZE.MEDIA.LARGE}px;
  min-width: ${SIZE.MEDIA.X_SMALL}px;
  margin: 0 auto;
  padding: 32px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
