import React from 'react'
import styled from 'styled-components'

import Header from 'src/components/organisms/header'
import Const from 'src/const'
import GlobalStyles from 'src/global-styles'

const { SIZE } = Const

const Layout = ({ children }) => (
  <>
    <Header siteTitle={'M-TECHDESIGN'} />　
    <MainWrapper>
      {children}
    </MainWrapper>
    <GlobalStyles />
  </>
)

const MainWrapper = styled.main`
  max-width: ${SIZE.MEDIA.LARGE}px;
  min-width: ${SIZE.MEDIA.X_SMALL}px;
  margin: 0 auto;
  padding: 32px;
  box-sizing: borderbox;
`

export default Layout
