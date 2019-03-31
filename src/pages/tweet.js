import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Heading from 'src/components/atoms/heading'
import TweetCardList from 'src/components/organisms/tweetCardList'
import Layout from 'src/components/templates/layout'
import Const from 'src/const'

const { COLOR, META, PAGE } = Const
const { H1 } = Heading

export default function TweetPage({
  data, 
}) {
  return (
    <>
      <Helmet
        title={`${PAGE.TWEET.NAME} - ${META.TITLE}`}
        meta={[
          { name: 'description', content: `${PAGE.TWEET.DESCRIPTION}` },
          { name: 'keywords', content: `${PAGE.TWEET.KEYWORDS}` },
        ]}
      >
        <html lang='ja' />
      </Helmet>
      <Layout bgColor={COLOR.VERY_DARK_GRAY} color={COLOR.DARK_GRAYISH_BLUE}>
        <H1>Twitter Search API</H1>
        <p>react hooks OR gatsbyjs OR jamstack min_retweets:10 OR min_faves:10</p>
        <TweetCardList tweetData={data.allTweet.edges}/>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query PageQuery {
    allTweet {
      edges {
        node {
          id_str
          created_at
          full_text
          retweet_count
          favorite_count
          user {
            name
            screen_name
            profile_image_url
          }
          entities {
            media {
              id
              media_url
            }
          }
        }
      }
    }
  }
`
