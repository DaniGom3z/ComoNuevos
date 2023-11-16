import React from 'react'
import Text from '../atoms/text'
import Logo from '../atoms/logo'

const cards = ({precio,total,porcentaje,image}) => {
  return (
   <>
   <div className='h-44 w-96  flex flex-col p-5 gap-2 shadow border bg-white'>
    <Logo
    img={image}
    style="w-12 h-12 rounded-full p-1 bg-red-50"
    />
    <div className=' w-full flex flex-col h-2/4'>
      <Text
      text={precio}
      style="text-2xl font-bold "
      />
    
      <div className=' w-full h-full items-end  flex justify-between'>
      <Text
      text={total}
      style="text-sm text-gray-500"
      />
      <Text
      text={porcentaje}
      style="text-green-500"
      />
      </div>
    </div>
   </div>
   </>
  )
}

export default cards