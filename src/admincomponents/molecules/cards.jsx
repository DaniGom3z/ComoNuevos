import React from 'react';
import Text from '../atoms/text';
import Logo from '../atoms/logo';

const Cards = ({ precio, total, porcentaje, image }) => {
  return (
    <>
      <div className='bg-white shadow p-2 pb-4  md:w-1/4 md:1/4 rounded'>
        <img src={image} className='w-10 max-md:w-6 bg-blue-200 shadow-xl rounded-full' alt="" />
          <div className='flex justify-between max-md:text-sm flex-wrap'>
            <p className='font-semibold max-md:text-sm'>{total}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-gray-400 max-md:text-sm font-semibold'>{precio}</p>
            <p className='text-green-400 max-md:text-sm font-semibold'>{porcentaje}</p>
          </div>
      </div>
    </>
  );
};

export default Cards;
