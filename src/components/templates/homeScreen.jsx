import React, { useState,useEffect } from 'react'
import Header  from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import data from '../../data'
import Cards from '../oraganisms/cards'
import img2 from '../../img/carro.jpg'
import Fotter from '../oraganisms/fotter'
import VentaCarros from '../oraganisms/ventaCarros'
const HomeScreen = () => {
const [carro,setCarro]=useState(data)

useEffect(() => {
  const seccionesOcultas = document.querySelectorAll('.hide');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  });

  seccionesOcultas.forEach((seccion) => observer.observe(seccion));
}, []); 
useEffect(() => {
  const seccionesOcultas = document.querySelectorAll('.hide2');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show2', entry.isIntersecting);
    });
  });

  seccionesOcultas.forEach((seccion) => observer.observe(seccion));
}, []); 
useEffect(() => {
  const seccionesOcultas = document.querySelectorAll('.hide3');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show3', entry.isIntersecting);
    });
  });

  seccionesOcultas.forEach((seccion) => observer.observe(seccion));
}, []); 

  return (
        <>
         <div className='fixed z-20 w-screen'>
         <Header />  
         </div>
         <div className='relative -top-20 banner'>
         <Banner style="img absolute" image={img2}/>
         <div className='image-overlay'></div>
         </div>
          <div className='relative z-10 top-20'>
         <Cards 
         carro={carro}
         />
         </div>
         <div className='contenedor gap-20 border-b border-red-100 relative w-full flex flex-col items-center justify-center '>
         <VentaCarros/>
            <div className='h-96 w-full gap-10 -z-10 bg-zinc-950 absolute -bottom-96 flex items-center justify-around'>
                <Fotter/>
            </div>
         </div>
        </>  
)
}

export default HomeScreen