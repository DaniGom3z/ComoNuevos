import React from 'react';
import Cards from '../organisms/cards';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';

const HomeAdmin = () => {

  return (
    <>
      <div className='min-h-screen w-screen colorAdmin overflow-x-auto flex flex-col'>
        {/* Encabezado */}
          <Header/>
        {/* Contenido principal */}
        <div className='flex flex-grow justify-between'>
                <Sidebar/>
          <div className='flex w-3/4 bg-stone-50 relative top-10 gap-20 flex-wrap items-start pt-20 justify-center'>
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
