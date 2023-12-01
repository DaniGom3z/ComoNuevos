import React from 'react'
import Img from '../atoms/img'
import Informacion from './informacion'
const carroVenta = ({text, text2}) => {
  return (
    <>
    <div className='flex text-sm md:text-base w-1/3 justify-center text-center'>
    <Informacion
     text={text}
     text2={text2}
    />
    </div>
    </>

  )
}

export default carroVenta