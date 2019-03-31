import React from 'react'
import styled from 'styled-components'
import dateFns from 'date-fns'

import Icon from 'src/components/atoms/icon/'
import Image from 'src/components/atoms/image/'
import Const from 'src/const'

const { AvatarImage } = Image
const { HeartIcon, RetweetIcon } = Icon
const { COLOR } = Const

const TweetCardList = (props) => (
  <CardList>
    {props.tweetData.map((data, i) => {
      const { 
        id_str,
        created_at, 
        full_text, 
        retweet_count,
        favorite_count,
        entities: { media },
        user: { name, screen_name, profile_image_url }
      } = data.node

      return (
        <li key={i}>
          <TweetCard>
            <TweetCardHeader>
              <a href={`https://twitter.com/${screen_name}`} target="_blank" rel="noopener noreferrer">
                <TweetCardAvatar src={profile_image_url} alt={screen_name} />
                <span>{name}</span>
                <TweetCardScreenName>@{screen_name}</TweetCardScreenName>
              </a>
              <TweetCardTime>{dateFns.format(created_at, 'MM/DD/YYYY HH:mm')}</TweetCardTime>
            </TweetCardHeader>
            <a href={`https://twitter.com/${screen_name}/status/${id_str}`} target="_blank" rel="noopener noreferrer">
              <div>{full_text}</div>
              {media && 
              <TweetCardMediaCountainer>
                <ul>
                  {media.map((media) => (
                    <li key={media.id}><img src={media.media_url} alt={media.id} /></li>
                  ))}
                </ul>
              </TweetCardMediaCountainer>
              }
            </a>
            <TweetCardIconList>
              <li>
                <RetweetIcon width={18} height={18} fill={COLOR.DARK_GRAYISH_BLUE} />
                <span>{retweet_count}</span>
              </li>
              <li>
                <HeartIcon width={18} height={18} fill={COLOR.DARK_GRAYISH_BLUE} />
                <span>{favorite_count}</span>
              </li>
            </TweetCardIconList>
          </TweetCard>
        </li>
      )
    })
    }
  </CardList>
)

export default TweetCardList

const CardList = styled.ul`
  border: 1px solid ${COLOR.DARK_GRAYISH_BLUE};
  > li {
    padding: 16px;
    border-bottom: 1px solid ${COLOR.DARK_GRAYISH_BLUE};

    &:last-child {
      border: none;
    }

    &:hover {
      background-color: ${COLOR.VERY_DARK_GRAY2};
    }
  }
`

const TweetCard = styled.div`
  margin-left: 58px;
`

const TweetCardHeader = styled.div`
  display: flex;

  > a {
    display: inline-flex;
    flex-shrink: 1;
    overflow: hidden;
    margin-right: 5px;
  }
`

const TweetCardAvatar = styled(AvatarImage)`
  float: left;
  margin-top: 3px;
  margin-left: -58px;
  position: absolute;
`

const TweetCardScreenName = styled.span`
  color: ${COLOR.DARK_GRAYISH_BLUE};
  margin-left: 4px;
`

const TweetCardTime = styled.span`
  color: ${COLOR.DARK_GRAYISH_BLUE};
  white-space: nowrap;
`

const TweetCardMediaCountainer = styled.div`
  margin-top: 12px;

  img {
    max-width: 100%;
  }
`

const TweetCardIconList = styled.ul`
  margin-top: 12px;
  display: block;

  > li {
    display: inline-block;
    min-width: 80px;

    > span {
      color: ${COLOR.DARK_GRAYISH_BLUE};
      margin-left: 6px;
    }
  }
`
