import React from 'react'
import Card from '../molecules/cards'
import carrito from '../../img/carrito-de-compras.png'
import usuarios from '../../img/grupo.png'
import vendidos from '../../img/mejor-vendido.png'
const cards = () => {
  return (
    <>
    <div className='flex gap-10 w-full justify-center flex-wrap '>
    <Card
    precio="Calidad"
    total="Las mejores gamas"
    image={carrito}
    />
    <Card
    precio="Garantia"
    total="Garantia de:"
    porcentaje="1 año"
    image={vendidos}
    />
    <Card
    precio="Comprometidos"
    total="Usuarios conformes"
    porcentaje="+300"
    image={usuarios}
    />
   
    </div>
    </>
  )
}

export default cards