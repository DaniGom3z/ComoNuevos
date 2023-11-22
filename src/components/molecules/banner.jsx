import React from 'react'
import Img from '../atoms/img'
const banner = ({image,style}) => {
  return (
    <>
    <div>
    <Img style={style} image={image} styles alt="" />
    
    </div>
    </>
  )
}

export default banner