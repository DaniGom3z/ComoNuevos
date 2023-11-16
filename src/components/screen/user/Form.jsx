import React from 'react'
import Header from '../../oraganisms/header'
import Button from '../../atoms/button'
const Form = () => {
  return (
    <>
    <div className='h-screen'>

    <Header/>
    <div className='flex justify-center h-3/4 items-center'>
    <div className=' h-96 w-3/4 flex justify-around items-center flex-col shadow-md rounded-md'>
        <input className='border-black border-x pl-1  rounded-md h-10'  type="text" placeholder='nombre' />
        <input className='border-black border-x pl-1 rounded-md h-10'  type="text" placeholder='correo electronico' />
        <input className=' border-black border-x pl-1 rounded-md h-10' type="text" placeholder='numero de telefono' />
        <Button styles="w-28 rounded-md h-8 bg-red-500" text="enviar"/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Form