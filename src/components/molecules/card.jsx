import React from 'react'
import Img from '../atoms/img'
import Info from '../atoms/info'
import Button from '../atoms/button'
import { Link } from 'react-router-dom'
const Card = ({price,name,imagenFrontal,url,color}) => {

 

 
  return (
    <>
    <div className=' w-52 h-48 ease-in-out duration-200 mt-14 rounded-md '>
     
      <h2 className='text-md uppercase font-bold text-center'>{name}</h2>
      <h2 className='text-md uppercase font-bold text-center'>{color}</h2>

      <h2 className='text-sm font-semibold text-gray-500 text-center border-b-2 mb-1 border-black'>{"$"+ price}</h2>
      <div className='h-32 shadow-md overflow-hidden hover:h-48 ease-in-out duration-200'>
        <div>
          <Img style="w-full  h-32" image={imagenFrontal}/>
        </div>
        
          <div className='w-full h-16'>
            
            <Link to={url}>
            <Button 
              styles="text-white w-full bg-red-500 h-full  z-10  text-xl font-semibold"
              text="VER"
            />
            </Link>
          </div>
      </div>
    </div>
    </>
  )
}

export default Card