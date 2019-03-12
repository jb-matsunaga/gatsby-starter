import React from 'react'
import styled from 'styled-components'
import Layout from 'src/components/templates/layout'
import IconList from 'src/components/molecules/icon-list'
import Image from 'src/components/atoms/image'

const { MainImage } = Image 

const IndexPage = () => (
  <Layout>
    <ImgWrapper>
      <MainImage />
    </ImgWrapper>
    <IconListWrapper>
      <IconList />
    </IconListWrapper>
  </Layout>
)

const ImgWrapper = styled.div`
  width: 420px;
  margin: 72px auto;
`

const IconListWrapper = styled.div`
  text-align: center;
`

export default IndexPage
