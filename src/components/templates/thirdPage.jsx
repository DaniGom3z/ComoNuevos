
import React, { useState } from 'react'
import Header from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import Img4 from '../../img/deportivo.jpg'
import Cards from '../oraganisms/cards'
import data3 from '../../data3'
const ThirdPage = () => {

    const [carro,setCarro]=useState(data3)

  return (
    <>
      <div className='fixed z-20 w-screen'>
         <Header />  
         </div>
    <div className='position relative -top-20 banner'>
         <Banner style=" img absolute" image={Img4}/>
         <div className='image-overlay'></div>
      </div>
      <div className='relative p-10'>
         <Cards 
         carro={carro}
         />
         </div>
    </>
  )
}

export default ThirdPage