import React from 'react'
import Img from '../atoms/img'
import Fotter from '../molecules/fotter'
import instagram from '../../img/instagram.png'
import twitter from '../../img/gorjeo.png'
import github from '../../img/github.png'
const fotter = () => {
  return (
   <>
     <div className='flex flex-wrap gap-10 h-10 items-center'>
              <Fotter
              text2="Acerca de nosotros"
              text3="atencion al cliente"
              text4="Contactanos"
              text="Siguenos"
              style="hover:border-b border-red-500 h-5 text-white list-none font-medium text-sm cursor-pointer first-letter:text-red-500"
              />
              <div className='flex gap-10'>
              <Img
              style="w-10"
              image={instagram}
              />
              <Img
              style="w-10"
              image={twitter}
              />
              <Img
              style="w-10"
              image={github}
              />
              </div>
              </div>
   
   
   </>
  )
}

export default fotter