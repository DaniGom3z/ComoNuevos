import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
import TablaPapelera2 from '../organisms/tablaPapelera2';
const PapeleraDeCitas = () => {
    const [citas, setCitas] = useState(null);
    const [error, setError] = useState(null);
   
  
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
  
        if (token) {
          const response = await axios.get('http://localhost:9000/citas?perPage=100', {
            headers: {
              Authorization: token,
            },
          });
          const citasEliminadas = response.data.citasFinales.filter(citas => citas.eliminada_logicamente === 1);
  
          console.log('respuesta exitosa', response.data);
          setCitas(citasEliminadas);
        } else {
          console.log('el token no se guardo pai');
        }
      } catch (error) {
        console.error('Error', error);
  
        if (error.response) {
          console.error('Respuesta del servidor:', error.response.data);
        }
  
        setError('Hubo un problema al cargar los datos.');
      }
    };
    

        useEffect(()=>{
            fetchData()
        },[])

  return (
    <>
   <div className='flex w-screen justify-between flex-row-reverse items-center relative colorAdmin h-screen'>
    <header className='w-full relative h-full'>
     <div className='w-full absolute top-0'>
       <Header/>
       <article className='relative top-32 pl-5 '>
          {error? (<p className='text-red-500'>{error}</p>):(citas ? (
            <TablaPapelera2 citas={citas}/>
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

export default PapeleraDeCitas