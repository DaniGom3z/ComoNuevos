import React from 'react'
import Listas from '../atoms/listas'
const links = ({text,style}) => {
  return (
    <>
    <Listas
    lista={text}
    style={style}
    />
    
    </>
  )
}

export default links