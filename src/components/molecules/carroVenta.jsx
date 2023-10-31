import React from 'react'
import Img from '../atoms/img'
import Informacion from './informacion'
const carroVenta = ({text, text2}) => {
  return (
    <>
    <div className='flex w-2/4 justify-center text-center'>
    <Informacion
     text={text}
     text2={text2}
    />
    </div>
    </>

  )
}

export default carroVenta