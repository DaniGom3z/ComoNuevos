import React from 'react'
import { Link } from 'react-router-dom'
const sesion = ({style, link}) => {
  return (
    <>
    <Link to={link}>
    <h2 className={style}>Iniciar Sesion</h2>
    </Link>
    
    
    </>
  )
}

export default sesion