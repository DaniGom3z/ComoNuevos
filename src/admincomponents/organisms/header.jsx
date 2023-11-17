import React from 'react';
import NavbarAdmin from '../molecules/navbarAdmin';
import Text from '../atoms/text';
const Header = () => {

 
  return (
    <>
    <div className='bg-white w-screen h-20 shadow gap-10 flex items-center justify-around '>
          <div>
            <Text
            text="ComoNuevos"
            style="text-2xl first-letter:text-red-500 font-bold"
            />
          </div>
         <NavbarAdmin/>
         
        </div>
    
    </>
  )
}

export default Header