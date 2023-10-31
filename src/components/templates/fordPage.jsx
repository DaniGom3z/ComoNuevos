import React, { useState } from 'react'
import Header from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import Img3 from '../../img/img3.webp'
import Cards from '../oraganisms/cards'
import data4 from '../../data4'
const FordPage = () => {
    const [carro,setCarro]=useState(data4)
  return (
    <>
       <Header/>
    <div className='position relative -top-20 banner '>
         <Banner style="img absolute" image={Img3}/>
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

export default FordPage