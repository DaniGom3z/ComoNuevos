import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import Img from '../../atoms/img'
import Header from '../../oraganisms/header'
import Title from '../../atoms/title'
import Info from '../../atoms/info'
import Button from '../../atoms/button'
import { Link } from 'react-router-dom';
import axios from 'axios';
const PageInfo = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id_auto = params.get('carro');
  const [detallesCarro, setDetallesCarro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/autos/${id_auto}`);
        if (response.status >= 200 && response.status < 300) {
          setDetallesCarro(response.data);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error al obtener detalles del carro con ID ${id_auto}:`, error.message);
      }
    };

    fetchData();
  }, [id_auto]);

 

  return (
    <>
    <div className='overflow-hidden'>

      <Header/>
    <div className='flex w-screen render justify-center items-center flex-col'>
      <div className='  min-h-full min-w-full flex items-center justify-center'>
      
      <Link to="/form">
      <Button styles="absolute bottom-28 left-48 bg-red-500 p-5 text-white text-xl font-semibold" text="AGENDAR CITA"/>
      </Link>
      </div>
      <div className='absolute left-20 top-32 w-1/5'>
      <Title styles="text-xl font-semibold mb-10 uppercase" text="detalles del carro"/>
      
      </div>
      
    </div>
    </div>
    </>
  );
};

export default PageInfo;