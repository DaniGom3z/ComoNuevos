import React from 'react';
import { useLocation } from 'react-router-dom';
import Img from '../../atoms/img'
import Header from '../../oraganisms/header'
import Title from '../../atoms/title'
import Info from '../../atoms/info'
import Button from '../../atoms/button'
import { Link } from 'react-router-dom';
const PageInfo = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const name = queryParams.get('name');
  const price = queryParams.get('price');
  const stock = queryParams.get('stock');
  const img = queryParams.get('img');

  return (
    <>
    <div className='overflow-hidden'>

      <Header/>
    <div className='flex w-screen render justify-center items-center flex-col'>
      <div className=' overflow-hidden'>
      <Img style="imgRender " image={img} alt={name} />
      <Link to="/form">
      <Button styles="absolute bottom-28 left-48 bg-red-500 p-5 text-white text-xl font-semibold" text="AGENDAR CITA"/>
      </Link>
      </div>
      <div className='absolute left-20 top-32 w-1/5'>
      <Title styles="text-xl font-semibold mb-10 uppercase" text="detalles del carro"/>
      <Info text={"nombre: "+ name}/>
      <Info text={"precio: $" + price}/>
      <Info text={"stock:" + stock}/>
      </div>
      
    </div>
    </div>
    </>
  );
};

export default PageInfo;