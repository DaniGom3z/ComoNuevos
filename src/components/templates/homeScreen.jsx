import React, { useState,useEffect } from 'react'
import Header  from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import Cards from '../oraganisms/cards'
import img2 from '../../img/carro.jpg'
import Fotter from '../oraganisms/fotter'
import VentaCarros from '../oraganisms/ventaCarros'
import axios from 'axios'
import { BarLoader } from 'react-spinners'

const HomeScreen = () => {
  
  const [carro,setCarro]=useState(null)
const [loading, setLoading]=useState(false)
const [error,setError]=useState(null);
const [currentPage, setCurrentPage] = useState(1);
const pageSize = 2; 


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

useEffect(()=>{
const fechData =async()=>{
  try{
    const response =await axios.get('http://localhost:9000/autos',{
      params:{
        currentPage,
        pageSize,
        sort:"nombre",
        order:"asc"
      },
    })

    const noEliminados= response.data.filter(data=> data.eliminada_logicamente===0)
    setCarro(noEliminados)
  }catch(error){
      console.error("error", error.message)

      if(error.response){
        console.log("respuesta del seridor", error.response)
      }
  }
}

fechData()
},[])



  return (
        <>
         <div className='fixed z-20 w-screen'>
         <Header />  
         </div>
         <div className='relative -top-20 banner'>
         <Banner style="img absolute" image={img2}/>
         <div className='image-overlay'></div>
         </div>
         <div className='relative p-10'>
        {error? (<p className='w-full text-center font-semibold text-red-500'>{error}</p>):(carro? (
        <Cards carro={carro} setCurrentPage={setCurrentPage} currentPage={currentPage} pageSize={pageSize}/>):(
          <div className='w-full flex justify-center'>
          <BarLoader color="#3498db" loading={loading} height={8} width={200}/>
          </div>
        )
        )}
      </div>
         <div className='contenedor gap-20 border-b border-red-100 relative w-full flex flex-col items-center justify-center '>
         <VentaCarros/>
            <div className='h-96 w-full gap-10 -z-10 fotter absolute -bottom-96 flex items-center justify-around'>
                <Fotter/>
            </div>
         </div>
        </>  
)
}

export default HomeScreen