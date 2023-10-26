
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
     <Header/>
    <div className='position relative -top-20 banner shadow shadow-black'>
         <Banner style="w-screen img absolute" image={Img4}/>
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