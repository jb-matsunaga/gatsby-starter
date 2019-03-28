import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from 'src/components/templates/layout'
import ArticleCard from 'src/components/molecules/article-card'
import Const from 'src/const'

const { META, PAGE } = Const

export default function TweetPage({
  data, 
}) {
  return (
    <>
      <Helmet
        title={`${PAGE.TWEET.NAME} - ${META.TITLE}`}
        meta={[
          { name: 'description', content: `${PAGE.TWEET.DESCRIPTION}` },
          { name: 'keywords', content: `${META.KEYWORDS}` },
        ]}
      >
        <html lang='ja' />
      </Helmet>
      <Layout>
        <ul>
          <li>tweet</li>
        </ul>
      </Layout>
    </>
  )
}

const CardList = styled.li`
  margin-bottom: 16px;
`

export const pageQuery = graphql`
  query PageQuery {
    allTweet {
      edges {
        node {
          created_at
          full_text
          user {
            name
            screen_name
            profile_image_url
          }
        }
      }
    }
  }
`
