import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
import TablaPapelera2 from '../organisms/tablaPapelera2';
import TablaCitas from '../organisms/tablaCitas';
const PapeleraDeCitas = () => {
    const [citas, setCitas] = useState(null);
    const [error, setError] = useState(null);
    const [menu, setMenu] = useState(false);
  
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

        const toggleMenu = () => {
          setMenu(!menu);
        };
        
        const abrirMenu = () => {
          setMenu(!menu);
        };
        
          return (
            <>
                <div className='flex w-screen justify-between  flex-row-reverse items-center relative colorAdmin h-screen'>
            <header className='w-full relative h-full '>
             <div className='w-full absolute top-0'>
             <Header
                id="abrirMenu"
                onClick={toggleMenu}
                menu={menu}
              />
                    
              
               <article className='relative  top-32 pl-5 '>
                  {error? (<p className='text-red-500'>{error}</p>):(citas ? (
                    <TablaPapelera2 text="Lista De Sedanes" citas={citas}/>
                    ):(<BarLoader color="blue" height={5} width={150}/>)
                  )}
                 
               </article>
             </div>
            </header>
            <aside className={`left-0 absolute transition-transform duration-300 ease-in-out transform ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
                {menu && (
                  <Sidebar
                    onClick={abrirMenu}
                    style="w-5 absolute right-10 top-7 t z-10 "
                    id="cerrarMenu"
                  />
                )}
              </aside>
                  
              </div>
            </>
          )
        }

export default PapeleraDeCitas