import React from 'react'

import Tabla from '../organisms/tabla';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
const sedanes = () => {
  return (
    <>
       <div className='min-h-screen w-screen colorAdmin overflow-x-auto flex flex-col'>
        {/* Encabezado */}
          <Header/>
        {/* Contenido principal */}
        <div className='flex flex-grow justify-between'>
                <Sidebar/>
          <div className='flex flex-grow flex-wrap gap-10 items-start pt-20 justify-center'>
           <Tabla
           text="Lista De Deportivos"
           />
          </div>
        </div>
      </div>
    </>
  )
}

export default sedanes