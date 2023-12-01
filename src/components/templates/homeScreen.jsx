import React, { useState,useEffect } from 'react'
import Header  from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import Cards from '../oraganisms/cards'
import img2 from '../../img/carro.jpeg'
import Fotter from '../oraganisms/fotter'
import VentaCarros from '../oraganisms/ventaCarros'
import axios from 'axios'
import { BarLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

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
        page: currentPage,
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
}, [currentPage, pageSize]);


  return (
        <>
        <div className=' w-20  h-20 z-20 fixed bottom-10 right-0 md:right-6'>
            <button className='md:text-base md:h-full md:w-full text-sm text-black font-semibold shadow-inner shadow-blue-300 hover:text-white  flex justify-center items-center rounded-s-full cursor-pointer hover:scale-105 duration-300 ease-in-out hover:bg-blue-700 w-12 h-12 bg-white'>Chat</button>
        </div>
         <div className='fixed flex justify-center z-20 w-full'>
         <Header />  
         <span className='absolute -bottom-0.5 bg-red-500 w-3/4 h-0.5'></span>
         </div>
         <div className='relative -top-20 banner'>
         <Banner style="img absolute" image={img2}/>
          <div className='w-full flex items-center justify-center h-full z-10 absolute'>
            <div className=' flex flex-wrap w-3/4 h-3/4 relative top-20 md:top-10'>
              <div className='w-3/4 md:w-3/4 shadow-sm overflow-hidden h-2/4 md:h-1/4 right-1/4 md:left-0 md:top-1/3 bottom-24 absolute'>
                  <div className=' p-10 grid grid-cols-1 hide2 w-full gap-1 divInfo h-full lg-max:hidden'>
                  <h2 className='text-sm md:text-4xl pagina border-b text-white font-semibold w-fit h-fit'>Porsche</h2>
                  <p className='text-white text-sm md:text-xl font-semibold relative right-2 md:relative md:left-96 md:-top-10'>¡Recien llegado!</p>
                  <p className='text-white text-sm md:text-xl font-semibold'>Recorre grandes distancias con estilo y rapidez</p>
                  </div>
              </div>
              <div>
                <Link to="/form">
                <button className='w-2/4 md:w-1/4 h-16  text-sm md:text-md text-white font-semibold shadow-sm bg-gray-900 bg-opacity-70 md:bottom-1/4 bottom-0 absolute  hover:bg-blue-700 duration-300 ease-in-out'>Agendar cita</button>
                </Link>
              </div>
            </div>
          </div>
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