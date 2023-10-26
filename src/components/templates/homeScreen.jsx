import React, { useState } from 'react'
import Header  from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import data from '../../data'
import Cards from '../oraganisms/cards'
import Img from '../../img/carro.jpg'
const HomeScreen = () => {
const [carro,setCarro]=useState(data)
  return (
        <>
        
         <Header/>    
         <div className='position relative -top-20 banner shadow shadow-black'>
         <Banner style="w-screen img absolute" image={Img}/>
         </div>
          <div className='relative p-10'>
         <Cards 
         carro={carro}
         />
         </div>
        </>  
)
}

export default HomeScreen