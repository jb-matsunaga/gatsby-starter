import React from 'react'
import styled from 'styled-components'
import Const from 'src/const'

const { COLOR, SIZE } = Const

const ArticleCard = (props) => {
  const { title, date, author, excerpt, path } = props
  return (
    <Article>
      <a href={path}>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </a>
      <div>
        {author} on {date}
      </div>
    </Article>
  )
}

const Article = styled.article`
  box-shadow: ${COLOR.VERY_DARK_GRAY_ALPHA8} 0px 1px 2px, ${COLOR.VERY_DARK_GRAY_2_ALPHA8} 0px 2px 4px;
  margin-left: 16px;
  margin-right: 16px;
  background: ${COLOR.WHITE};
  border-radius: ${SIZE.RADIUS.BASE}px;
  padding: 16px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0px 4px 8px ${COLOR.VERY_DARK_GRAY_ALPHA8}, 0px 8px 16px ${COLOR.VERY_DARK_GRAY_2_ALPHA8};
  }
`

export default ArticleCard
