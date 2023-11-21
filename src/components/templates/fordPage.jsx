import React, { useState,useEffect } from 'react'
import Header from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import Img3 from '../../img/img3.webp'
import Cards from '../oraganisms/cards'
import { BarLoader } from 'react-spinners'
import axios from 'axios'
const FordPage = () => {

 const [carro, setCarro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/autos?tipo=pick%20up");
        
        
        const data = await response.data;
        if(data.length === 0){
          setError("no tenemos autos disponibles")
          setLoading(false)
          return;
        }
        const autosNoEliminados = data.filter(carro=> carro.eliminada_logicamente===0)
        setCarro(autosNoEliminados);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener la lista de autos:', error.message);
        setError('Hubo un problema al cargar los datos.');
        setLoading(false);
      }
    };

    fetchData();
  },[] );
  return (
    <>
      <div className='fixed z-20 w-screen'>
        <Header />
      </div>
      <div className='position relative -top-20 banner '>
        <Banner style="img absolute" image={Img3}/>
        <div className='image-overlay'></div>
      </div>
      <div className='relative p-10'>
      {error? (<p className='w-full text-center font-semibold text-red-500'>{error}</p>):(carro? (
        <Cards carro={carro}/>):(
          <div className='w-full flex justify-center'>
          <BarLoader color="#3498db" loading={loading} height={8} width={200}/>
          </div>
        )
        )}
      </div>
    </>
  );
}

export default FordPage