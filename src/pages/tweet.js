import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from 'src/components/templates/layout'
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
        <CardList>
          {data.allTweet.edges.map((edge, i) => {
            const { 
              id_str,
              created_at, 
              full_text, 
              retweet_count,
              favorite_count,
              entities: { media },
              user: { name, screen_name, profile_image_url　}
            } = edge.node

            return (
              <li key={i}>
                <div>
                  <div>
                    <a href={`https://twitter.com/${screen_name}`} target="_blank" rel="noopener noreferrer">
                      <img src={profile_image_url} alt={screen_name} />
                      <span>{name}</span>
                      <span>{screen_name}</span>
                      <small>{created_at}</small>
                    </a>
                  </div>
                  <a href={`https://twitter.com/${screen_name}/status/${id_str}`} target="_blank" rel="noopener noreferrer">
                    <div>{full_text}</div>
                    <div><ul><li>retweet:{retweet_count}</li><li>favorite:{favorite_count}</li></ul></div>
                    {media && 
                    <div>
                      <ul>
                        {media.map((media) => (
                          <li key={media.id}><img src={media.media_url} alt={media.id} /></li>
                        ))}
                      </ul>
                    </div>
                    }
                  </a>
                </div>
              </li>
            )
          })
          }
        </CardList>
      </Layout>
    </>
  )
}

const CardList = styled.ul`
  > li {
    padding: 8px;
    margin-bottom: 16px;
  }
`

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
