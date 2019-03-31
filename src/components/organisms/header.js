import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Const from 'src/const'

const { COLOR } = Const 

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      <LogoLink to='/'>{siteTitle}</LogoLink> 
      <Nav>
        <NavLink to='/tweet'>Tweet</NavLink>
      </Nav>
    </Inner>
  </Wrapper>
)

const Wrapper = styled.div`
  background: ${COLOR.VERY_DARK_GRAY};
  font-size: 13px;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLOR.VERY_DARK_GRAY2};
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 4px 8px;
`

const LogoLink = styled(Link)`
  color: ${COLOR.WHITE};

  &:hover {
    opacity: 0.7;
  }
`

const Nav = styled.nav`
  display: inline-flex;
`

const NavLink = styled(Link)`
  color: ${COLOR.DARK_GRAYISH_BLUE};
  
  &:hover {
    opacity: 0.7;
  }
`

export default Header
