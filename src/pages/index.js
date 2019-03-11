import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <ImgWrapper>
      <Image /> 
    </ImgWrapper>
  </Layout>
)

const ImgWrapper = styled.div`
  width: 420px;
  margin: 72px auto;
`

export default IndexPage
