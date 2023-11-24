import React from 'react'

const lista = ({text,style,image,styleImg,onClick}) => {
  return (
    <>
    <li onClick={onClick} className={style}>{text} <img className={styleImg} src={image} alt="" /></li>
    </>
  )
}

export default lista