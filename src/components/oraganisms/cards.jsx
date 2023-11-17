import React from 'react'
import Card from '../molecules/card'
import Img from '../atoms/img'
import flecha from '../../img/tomar.png'
const Cards = ({carro}) => {
const mostrar=()=>{
  document.getElementById('cards').style.height = '32rem'
  document.getElementById('cerrar').style.display='block'
  document.getElementById('abrir').style.display='none'
 
}  
const ocultar=()=>{
  document.getElementById('cards').style.height='0rem'
  document.getElementById('abrir').style.display='block'
  document.getElementById('cerrar').style.display='none'
  
}

  return (
    <>
    <div>
      <button className='bottom-0 absolute left-2/4 z-10 abrir op' onClick={mostrar}>
      <Img 
      id="abrir"
      style=" w-10 h-10"
      image={flecha}
      />
      </button>
      <div id='cards' className='flex justify-around flex-wrap gap-1 ease-in-out duration-1000 overflow-auto'>
       {
         carro.map(car=>{
           
           return (
             <Card 
             key={car.id}
             img={car.img}
             name={car.name}
             price={car.price}
             stock={car.stock}
             
             />
             
             )
            })
          }
      </div>
      <button className='left-2/4 absolute z-10 cerrar' onClick={ocultar}>
      <Img
      id="cerrar"      
      style=" w-10 h-10"
      image={flecha}
      />
      </button>
    </div>
    </>
  )
}

export default Cards