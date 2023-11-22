import React from 'react';
import NavbarAdmin from '../molecules/navbarAdmin';
import Text from '../atoms/text';
const Header = () => {

 
  return (
    <>
    <div className='bg-white w-full h-20 shadow flex-wrap  flex items-center justify-around '>
          <div>
            <Text
            text="ComoNuevos"
            style="text-2xl first-letter:text-red-500 font-bold"
            />
          </div>
          <div>
         <NavbarAdmin/>
          </div>
         
        </div>
    
    </>
  )
}

export default Header