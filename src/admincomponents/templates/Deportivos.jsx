import React, { useState,useEffect } from 'react'

import Tabla from '../organisms/tabla';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
const Sedanes = () => {

const [autos, setAutos]=useState(null)
const [error, setError]=useState(null)
const [loading, setLoading]=useState(true)





useEffect(() => {
const fetchData = async () => {

        try {
          const tokenAlmacenado = localStorage.getItem('token');

              if(tokenAlmacenado){
                  const response = await axios.get("http://localhost:9000/auto?tipo=deportivo", {
                      headers: {
                        Authorization: tokenAlmacenado
                      },

              });
                const noEliminadoLogicamente = response.data.filter(carro => carro.eliminada_logicamente===0)
        
       
               setAutos(noEliminadoLogicamente);
              }else{
              console.log("no jala")
              }
            } catch (error) {
            console.error("Error:", error);

                  if (error.response) {
                  console.error("Respuesta del servidor:", error.response.data);
                  }

            setError('Hubo un problema al cargar los datos.');
            setLoading(false);
          }
          };

        fetchData();
    },[]);

    


  return (
    <> 
     <div className='flex w-screen justify-between flex-row-reverse items-center relative colorAdmin h-screen'>
    <header className='w-full relative h-full'>
     <div className='w-full absolute top-0'>
       <Header/>
       <article className='relative top-32 pl-5 '>
          {error? (<p className='text-red-500'>{error}</p>):(autos ? (
            <Tabla text="Lista De Deportivos" autos={autos}/>
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

export default Sedanes