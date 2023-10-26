import React from 'react'
import Listas from '../atoms/listas'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <>
 <div>
    <nav>
        <ul className='flex gap-10 '>
         <Link to="/">
            <Listas lista="Inicio" /> 
         </Link>
         <Link to="/seconPage">
           <Listas lista="Sedanes" /> 
         </Link>
         <Link to="/thirdPage">
           <Listas lista="Pick Up" /> 
         </Link>
         <Link to="/FordPage">
           <Listas lista="Deportivos"/> 
         </Link>
          
        </ul>
    </nav>
 </div>
    </>
  )
}

export default navbar