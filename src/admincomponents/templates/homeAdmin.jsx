import React from 'react';
import Cards from '../organisms/cards';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';

const HomeAdmin = () => {

  return (
    <>
    <div className='flex w-screen justify-between flex-row-reverse items-center relative colorAdmin h-screen'>
     <header className='w-full relative h-full'>
      <div className='w-full absolute top-0'>
        <Header/>
        <article className='relative top-32  '>
          <Cards/>
        </article>
      </div>
     </header>
        <aside className='left-0'>
          <Sidebar/>
        </aside>
     
    </div>
    </>
  );
};

export default HomeAdmin;
