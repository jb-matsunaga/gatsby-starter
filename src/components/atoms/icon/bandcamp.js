import React from 'react'
import Const from 'src/const'

const { COLOR } = Const

const BandcampIcon = (props) => {
  return (
    <svg
      width={props.width || 30}
      height={props.height || 30}
      fill={props.fill || COLOR.VERY_DARK_GRAY}
      viewBox='0 0 97.236 97.236'
    >  
      <polygon points="0,78.075 70.006,78.075 97.236,19.161 27.23,19.161 	"/>
    </svg>
  )
}

export default BandcampIcon
