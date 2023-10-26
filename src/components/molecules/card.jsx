import React from 'react'
import Img from '../atoms/img'
import Info from '../atoms/info'
import Button from '../atoms/button'
import { Link } from 'react-router-dom'
const Card = ({price,name,stock,img}) => {

 

 
  return (
    <>
    <div className='w-52 shadow mt-20 rounded-md overflow-hidden relative hover:shadow-xl duration-300'>
        <div className='fit-content  hover:shadow-xl hover:scale-105  ease-in-out duration-300'>
            <Img image={img}/>
        </div>
        <div className='relative top-2 left-3'>
        <Info styles="font-semibold text-xl first-letter:uppercase" text={name}/>
        </div>
        <Link to={`/pageInfo?name=${name}&price=${price}&stock=${stock}&img=${img}`}>
        <Button 
        styles="text-white pl-5 pr-5 bg-red-600 rounded relative z-10 hover:text-slate-300 ease-in-out duration-300 top-10 left-32 shadow"
        text="ver"
        />
        </Link>
        <Info styles="relative left-3" text={"stock: "+stock}/>
        <Info styles="relative left-3 text-slate-400" text={"$"+price}/>
    </div>
    </>
  )
}

export default Card