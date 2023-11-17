import React from 'react';
import Text from '../atoms/text';
import Logo from '../atoms/logo';

const Cards = ({ precio, total, porcentaje, image }) => {
  return (
    <>
      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col p-5 gap-2 shadow border bg-white'>
        <Logo img={image} style='w-1/4 h-2/4 rounded-full p-1 bg-red-50' />
        <div className='flex flex-col h-2/4'>
          <Text text={precio} style='text-2xl font-bold' />

          <div className='flex justify-between items-end mt-2'>
            <Text text={total} style='text-sm text-gray-500' />
            <Text text={porcentaje} style='text-green-500' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
