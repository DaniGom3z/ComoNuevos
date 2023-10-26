import React from 'react'
import Navbar from '../molecules/navbar'
import Title from '../atoms/title'

const header = () => {
  return (
        <>
        <header className='flex justify-around bg-red-800 h-20 items-center relative z-10'>
            <Title styles="text-white text-xl font-semibold" text="ComoNuevo"/>
            <Navbar/>
        </header>
        </>
    )
}
export default header