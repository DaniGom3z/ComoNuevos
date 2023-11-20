import React from 'react'
import Card from '../molecules/cards'
import carrito from '../../img/carrito-de-compras.png'
import usuarios from '../../img/grupo.png'
import vendidos from '../../img/mejor-vendido.png'
const cards = () => {
  return (
    <>
    
    <Card
    precio="$110K"
    total="Total Vendido"
    porcentaje="1.57%"
    image={carrito}
    />
    <Card
    precio="Audi"
    total="Mas vendido"
    porcentaje="2.81%"
    image={vendidos}
    />
    <Card
    precio="300"
    total="Total de usuarios"
    porcentaje="2.12%"
    image={usuarios}
    />
   
   
    </>
  )
}

export default cards