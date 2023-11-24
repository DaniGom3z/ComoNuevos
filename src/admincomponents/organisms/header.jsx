import React,{useState} from 'react';
import NavbarAdmin from '../molecules/navbarAdmin';
import Text from '../atoms/text';
import menuAbrir from '../../img/menu-abierto.png'
const Header = ({onClick,menu,id}) => {


 
  return (
    <>
    <div className='bg-white w-screen h-20 flex-wrap shadow relative pl-5 space-x-16 flex items-center'>
        <img onClick={onClick} className={`w-10 z-10 cursor-pointer duration-300 ease-in-out transition-all rotate-180 ${menu ? 'hidden' : 'translate-x-0'}`} id={id} src={menuAbrir} alt="" />
          <div className='absolute h-full w-3/4 items-center flex-wrap flex justify-around'>
            <Text
            text="ComoNuevos"
            style="text-xl first-letter:text-red-500 font-bold"
            />
            <div>
         <NavbarAdmin/>
            </div>
          </div>

         
        </div>
    
    </>
  )
}

export default Header