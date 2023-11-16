import React from 'react'
import Cards from '../organisms/cards'
const homeAdmin = () => {
  return (
    <>
    <div className='h-screen w-screen colorAdmin overflow-x-hidden'>
        <div className='w-full relative bg-white h-20 shadow'>

        </div>
            <div className=' justify-between pr-20  flex h-full'>
                 <div className='bg-slate-800 shadow h-full w-72'>
            
                 </div>
                <div className='flex h-1/4 items-center relative w-3/4 justify-center'>
                <Cards/>
            </div>
            </div>
    </div>
    </>
  )
}

export default homeAdmin