import React from 'react'

const logo = ({img,style}) => {
  return (
    <>
    <img className={style} src={img} alt="" />
    </>
  )
}

export default logo