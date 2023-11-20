import React, { useState,useEffect } from 'react'

import Tabla from '../organisms/tabla';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
import axios from 'axios';
import { configure } from '@testing-library/react';
const Sedanes = () => {

const [autos, setAutos]=useState(null)
const [error, setError]=useState(null)
const [loading, setLoading]=useState(true)




/*para trer a llamar los carros dependiendo el tipo de carro*/
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

      // Imprime la respuesta exitosa
      console.log('Respuesta exitosa:', response.data);

      // Actualiza el estado 'autos' con los datos recibidos
      setAutos(response.data);
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
      }, []);

      /*ahora la funcion para editar*/


  return (
    <>
       <div className='min-h-screen w-screen colorAdmin overflow-x-auto flex flex-col'>
        {/* Encabezado */}
          <Header/>
        {/* Contenido principal */}
        <div className='flex flex-grow justify-between'>
                <Sidebar/>
          <div className='flex flex-grow flex-wrap gap-10 items-start pt-20 pl-10 justify-center'>
          {error && <p>Error: {error}</p>}
           {autos && <Tabla text="Lista De Deportivos" autos={autos}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sedanes