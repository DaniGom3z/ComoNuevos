import React,{ useEffect, useState } from 'react';
import Card from '../molecules/card';
import Img from '../atoms/img';
import { BarLoader } from 'react-spinners';
import flecha from '../../img/tomar.png';
import axios from 'axios';

const Cards = ({ carro, price, name, imagenFrontal }) => {
  const [carDetails, setCarDetails] = useState([]);

  const mostrar = () => {
    document.getElementById('cards').style.height = '32rem';
    document.getElementById('cerrar').style.display = 'block';
    document.getElementById('abrir').style.display = 'none';
  };

  const ocultar = () => {
    document.getElementById('cards').style.height = '0rem';
    document.getElementById('abrir').style.display = 'block';
    document.getElementById('cerrar').style.display = 'none';
  };
  useEffect(() => {
    const fetchData = async (id_auto) => {
      try {
        const response = await axios.get(`http://localhost:9000/autos/${id_auto}`);
        
        if (response.status >= 200 && response.status < 300) {
          const carDetail = response.data;
          setCarDetails((prevDetails) => [...prevDetails, carDetail]);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error en la solicitud Axios:', error);
        throw error;
      }
    };
  
    // Asegúrate de pasar el id_auto correspondiente al auto actual
    if (carro.length > 0) {
      carro.forEach((auto) => {
        fetchData(auto.id_auto);
      });
    }
  }, [carro]);
  return (
    <>
      <div>
        <button className='bottom-0 absolute left-2/4 z-10 abrir op' onClick={mostrar}>
          <Img id="abrir" style="w-10 h-10" image={flecha} />
        </button>
        <div id='cards' className={`flex justify-around flex-wrap gap-1 ease-in-out duration-1000 overflow-auto mostrar`}>
        {carro.length > 0 && (
          carro.map((auto, index) => (
            <Card
            
            key={auto.id_auto}
            name={auto.nombre}
            price={auto.precio}
            imagenFrontal={auto.imagen}
            details={carDetails.find((detail) => detail.id_auto === auto.id_auto)}
            url={`/pageInfo/${auto.id_auto}`}
            />
          ))
        )}
        </div>
        <button className='left-2/4 absolute z-10 cerrar' onClick={ocultar}>
          <Img id="cerrar" style="w-10 h-10" image={flecha} />
        </button>
      </div>
    </>
  );
};

export default Cards;
