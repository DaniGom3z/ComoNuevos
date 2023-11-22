import React from 'react'
import Links from './links'
const fotter = ({text,text2,text3,text4,style}) => {
  return (
    <>
    <Links 
    text={text2}
    style={style}
    />
    <Links 
    text={text3}
    style={style}
    />
    <Links 
    text={text4}
    style={style}
    />
    <Links 
    text={text}
    style={style}
    />
    </>
  )
}

export default fotter