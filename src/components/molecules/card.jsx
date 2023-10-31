import React from 'react'
import Img from '../atoms/img'
import Info from '../atoms/info'
import Button from '../atoms/button'
import { Link } from 'react-router-dom'
const Card = ({price,name,stock,img}) => {

 

 
  return (
    <>
    <div className=' w-52 h-48 ease-in-out duration-200 mt-14 rounded-md '>
      <div className='h-32 shadow-sm overflow-hidden hover:h-48 ease-in-out duration-200'>
        <div>
          <Img style="w-full  h-32 " image={img}/>
        </div>
          <div className='w-full h-16'>
            <Link to={`/pageInfo?name=${name}&price=${price}&stock=${stock}&img=${img}`}>
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