import React from 'react'
import styled from 'styled-components'

import Header from 'src/components/organisms/header'
import Const from 'src/const'
import GlobalStyles from 'src/global-styles'

const { SIZE } = Const

const Layout = (props) => {
  return (
  <Wrapper bgColor={props.bgColor} color={props.color}>
    <Header siteTitle={'M-TECHDESIGN'}/> 
    <MainWrapper>
      {props.children}
    </MainWrapper>
    <GlobalStyles />
  </Wrapper>
)
  }

const Wrapper = styled.div`
  background-color: ${props => props.bgColor && props.bgColor};
  color: ${props => props.color && props.color};
`

const MainWrapper = styled.main`
  max-width: ${SIZE.MEDIA.LARGE}px;
  min-width: ${SIZE.MEDIA.X_SMALL}px;
  margin: 0 auto;
  padding: 16px 32px;
  box-sizing: borderbox;
`

export default Layout
