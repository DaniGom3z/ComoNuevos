import React, { useState } from 'react'
import Header from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import Img2 from '../../img/sedan.jpg'
import Cards from '../oraganisms/cards'
import data2 from '../../data2'
const SecondPage = () => {

  const [carro,setCarro]=useState(data2)
  
  return (
    <>
    <Header/>
    <div className='position relative -top-20 banner '>
         <Banner style="img absolute" image={Img2}/>
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

export default SecondPage