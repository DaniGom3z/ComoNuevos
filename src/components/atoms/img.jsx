import React from 'react'

const img = ({image,style,id}) => {
  return (
    <>
    <img id={id} className={style} src={image}/>
    </> 

)
}

export default img