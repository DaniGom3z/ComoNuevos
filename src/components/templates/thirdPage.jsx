
import React, { useState,useEffect } from 'react'
import Header from '../oraganisms/header'
import Banner from '../oraganisms/banner'
import Img4 from '../../img/deportivo.jpg'
import Cards from '../oraganisms/cards'
import { BarLoader } from 'react-spinners'
const ThirdPage = () => {

    const [carro,setCarro]=useState(null)
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState(null)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:9000/autos?tipo=deportivo");
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          setCarro(data);
          setLoading(false);
        } catch (error) {
          console.error('Error al obtener la lista de autos:', error.message);
          setError('Hubo un problema al cargar los datos.');
          setLoading(false);
        }
      };
    
      fetchData();
    }, []);
    
return (
    <>
      <div className='fixed z-20 w-screen'>
        <Header />
      </div>
      <div className='position relative -top-20 banner'>
        <Banner style=" img absolute" image={Img4}/>
        <div className='image-overlay'></div>
      </div>
      <div className='relative p-10'>
        {loading ? (
          <div className="loader-container">
            <BarLoader color="#3498db" loading={loading} height={8} width={200} />
          </div>
        ) : (
          <Cards carro={carro} />
        )}
        {error && <p>Error: {error}</p>}
      </div>
    </>
  );
}

export default ThirdPage