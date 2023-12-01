import React from 'react'
import Info from '../atoms/info'
const informacion = ({text, text2}) => {
  return (
    <>
    <div className='flex flex-col gap-10'>
      <Info
      text={text}
      styles="text-xl md:text-3xl font-bold first-letter:text-red-500"
      />
    <Info
    styles="text-black text-md font-semibold first-letter:uppercase"
    text={text2}
    />
    </div>
    </>
  )
}

export default informacion