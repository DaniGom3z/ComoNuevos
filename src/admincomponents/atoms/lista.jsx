import React from 'react'

const lista = ({text,style,image,styleImg}) => {
  return (
    <>
    <li className={style}>{text} <img className={styleImg} src={image} alt="" /></li>
    </>
  )
}

export default lista