import React, { useEffect, useState } from 'react'
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import TablaPapelera from '../organisms/tablaPapelera';
const PapeleraDeAutos = () => {
const[carros,setCarros]=useState(null)
const [error, setError] = useState(null);



const fechtData=async()=>{
  try{
    const token =localStorage.getItem('token');

    if(token){
      const response =await axios.get('http://localhost:9000/auto?perPage=100',{
        headers:{
          Authorization: token,
        },
      });

      const autosNoEliminadosLogicamente = response.data.filter(carros=> carros.eliminada_logicamente===1)
      setCarros(autosNoEliminadosLogicamente)
      console.log("respuesta exitosa", response.data)
    }
  }catch(error){
      console.error("Error", error)
      if(error.response){
        console.error("respuesta del servidor", error.response.data)
      }
      setError("hubo un problema en cargar los datos")
  }
  
}


    useEffect(()=>{
    fechtData()

    },[])

  return (
    <>
<div className='flex w-screen justify-between flex-row-reverse items-center relative colorAdmin h-screen'>
    <header className='w-full relative h-full'>
     <div className='w-full absolute top-0'>
       <Header/>
       <article className='relative top-32 pl-5 '>
          {error? (<p className='text-red-500'>{error}</p>):(carros ? (
            <TablaPapelera text="Lista De Deportivos" carros={carros}/>
            ):(<BarLoader color="blue" height={5} width={150}/>)
          )}
         
       </article>
     </div>
    </header>
    <aside className='left-0 '>
          <Sidebar/>
        </aside>
          
      </div>
    </>
  )
}

export default PapeleraDeAutos