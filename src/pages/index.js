import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Layout from 'src/components/templates/layout'
import IconList from 'src/components/molecules/icon-list'
import Image from 'src/components/atoms/image'
import Const from 'src/const'

const { META } = Const
const { MainImage } = Image 

const IndexPage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: `${data.site.siteMetadata.description}` },
            { name: 'keywords', content: `${META.KEYWORDS}` },
          ]}
        >
          <html lang="ja" />
        </Helmet>
        <Wrapper>
          <ImgWrapper>
            <MainImage />
          </ImgWrapper>
          <IconListWrapper>
            <IconList />
          </IconListWrapper>
        </Wrapper>
      </Layout>
    )}
  />
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ImgWrapper = styled.div`
  width: 320px;
  height: auto;
  margin-bottom: 32px;
`

const IconListWrapper = styled.div`
  text-align: center;
`

export default IndexPage
