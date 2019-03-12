import React from 'react'
import styled from 'styled-components'
import Icon from 'src/components/atoms/icon'
import Const from 'src/const'

const { BandcampIcon, FacebookIcon, GithubIcon, InstagramIcon, SoundcloudIcon, TwitterIcon } = Icon
const { SNS } = Const

const IconList = (props) => {
  return (
    <StyledIconList>
      <List><a href={SNS.GITHUB} target='_blank' rel='noopener noreferrer'><GithubIcon /></a></List> 
      <List><a href={SNS.TWITTER} target='_blank' rel='noopener noreferrer'><TwitterIcon /></a></List> 
      <List><a href={SNS.FACEBOOK} target='_blank' rel='noopener noreferrer'><FacebookIcon /></a></List> 
      <List><a href={SNS.INSTAGRAM} target='_blank' rel='noopener noreferrer'><InstagramIcon /></a></List> 
      <List><a href={SNS.BANDCAMP} target='_blank' rel='noopener noreferrer'><BandcampIcon /></a></List> 
      <List><a href={SNS.SOUNDCLOUD} target='_blank' rel='noopener noreferrer'><SoundcloudIcon /></a></List> 
    </StyledIconList>
  )
}

const StyledIconList = styled.ul`
  display: inline-flex;
`

const List = styled.li`
  padding: 4px;
`

export default IconList
