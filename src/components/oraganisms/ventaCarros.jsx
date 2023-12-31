import React from 'react'
import CarroVenta from '../molecules/carroVenta'
import audi2 from '../../img/audi2.jpg'
import audi3 from '../../img/audiTec.jpg'
import audi from '../../img/audi.jpg'
import Img from '../atoms/img'
const ventaCarros = () => {
  return (
    <>
    <div className='w-full bg-gray-50'>
    <div className='hide flex w-2/4 justify-center  items-center gap-10 pb-5 border-b border-gray-300'>
          <CarroVenta
          text="ERGONOMICO"
          text2="este es un carro totalmente ergonomico con uno de los 
          mejores motores del mercado actualmente"
          />
            <Img
            style="w-3/4 h-3/4 relative rounded"
            image={audi}
            />
           
            </div>
            </div>
            <div className='w-full bg-gray-50'>
          <div className='hide2 flex w-2/4 justify-center items-center flex-row-reverse gap-10 pb-5 border-b border-gray-300 '>
          <CarroVenta
          text="ECONOMICO"
          text2="poco gasto de gasolina durando 20km/L"
          />
            <Img
            style="w-3/4 h-3/4 relative rounded"
            image={audi2}
            />
            </div>
            </div>
            <div className='w-full bg-gray-50'>

          <div className='hide3 flex w-2/4 justify-center items-center gap-10 pb-5 border-b border-gray-300'>
          <CarroVenta
          text="INOVADOR"
          text2="cuenta con tecnologia de punta"
          />
            <Img
            style="w-3/4 h-3/4 relative rounded"
            image={audi3}
            />
            </div>
            </div>
    </>
  )
}

export default ventaCarros