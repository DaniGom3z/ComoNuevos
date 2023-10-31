import React from 'react'
import Listas from '../atoms/listas'
import { Link } from 'react-router-dom'
const navbar = ({style}) => {
  return (
    <>
 <div className={style}>
    <nav>
        <ul className='flex gap-10 '>
         <Link to="/">
            <Listas style="text-white font-medium text-sm cursor-pointer first-letter:text-red-500" lista="Inicio" /> 
         </Link>
         <Link to="/seconPage">
           <Listas style="text-white font-medium text-sm cursor-pointer first-letter:text-red-500" lista="Sedanes" /> 
         </Link>
         <Link to="/thirdPage">
           <Listas style="text-white font-medium text-sm cursor-pointer first-letter:text-red-500" lista="Deportivos" /> 
         </Link>
         <Link to="/FordPage">
           <Listas style="text-white font-medium text-sm cursor-pointer first-letter:text-red-500" lista="Pick Up"/> 
         </Link>
          
        </ul>
    </nav>
 </div>
    </>
  )
}

export default navbar