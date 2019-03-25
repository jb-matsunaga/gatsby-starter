import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Const from 'src/const'

const { COLOR } = Const 

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      <Link to='/'>{siteTitle}</Link> 
    </Inner>
  </Wrapper>
)

const Wrapper = styled.div`
  background: ${COLOR.VERY_DARK_GRAY};
  font-size: 13px;
`

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4px 8px;

  > a {
    color: #fff;
    text-decoration: none;
  }
`

export default Header
