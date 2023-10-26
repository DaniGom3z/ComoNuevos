import React from 'react'
import Card from '../molecules/card'

const Cards = ({carro}) => {
  

  return (
    <>
    <div className='flex justify-around flex-wrap'>
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
    </>
  )
}

export default Cards