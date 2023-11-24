import React, { useEffect, useState } from 'react';
import Card from '../molecules/card';
import Img from '../atoms/img';
import { BarLoader } from 'react-spinners';
import flecha from '../../img/tomar.png';
import axios from 'axios';

const Cards = ({ carro, setCurrentPage, currentPage, pageSize }) => {
  const [loadingDetails, setLoadingDetails] = useState(false);

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

 

 

  const handlePageChange = (newPage) => {
    const totalPages = Math.ceil(carro.length / pageSize);
  
    // Validar si hay datos en la siguiente página
    const nextPageStartIndex = (newPage - 1) * pageSize;
    const nextPageHasData = nextPageStartIndex < carro.length;
  
    // Actualizar la página solo si es válida
    if (newPage >= 1 && newPage <= totalPages && nextPageHasData) {
      setCurrentPage(newPage);
    } else if (newPage > totalPages) {
      setCurrentPage(totalPages);
    }
  };
  
  const totalPages = Math.ceil(carro.length / pageSize);  // Declara totalPages aquí
  
  return (
    <>
      <div className='h-auto'>
        <button className='bottom-0 absolute left-2/4 z-10 abrir op' onClick={mostrar}>
          <Img id="abrir" style="w-10 h-10" image={flecha} />
        </button>
        <div id='cards' className={`flex flex-col items-center gap-1 ease-in-out duration-1000 overflow-auto mostrar`}>
          <div className='flex justify-around flex-wrap gap-1'>
            {carro.length > 0 &&
              carro.map((auto, index) => (
                <Card
                  key={auto.id_auto}
                  name={auto.nombre}
                  price={auto.precio}
                  imagenFrontal={auto.imagen}
                 
                  url={`/pageInfo/${auto.id_auto}`}
                />
              ))}
          </div>
          {loadingDetails && (
            <div className='flex justify-center mt-4'>
              <BarLoader color="#3498db" loading={loadingDetails} height={8} width={200} />
            </div>
          )}
          <div className='flex justify-center mt-16'>
                    <button
            className='rounded bg-blue-gray-600 p-2 mx-2'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <button
            className='bg-blue-gray-600 rounded p-2 mx-2'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || (currentPage * pageSize >= carro.length)}
          >
            Siguiente
          </button>
          </div>
        </div>
        <button className='left-2/4 absolute z-10 cerrar' onClick={ocultar}>
          <Img id="cerrar" style="w-10 h-10" image={flecha} />
        </button>
      </div>
    </>
  );
};

export default Cards;
