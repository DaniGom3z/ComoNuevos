import React,{useState} from 'react';
import Cards from '../organisms/cards';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';

const HomeAdmin = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  
  const abrirMenu = () => {
    setMenu(!menu);
  };
  
    return (
      <>
          <div className='flex w-screen justify-between  flex-row-reverse items-center relative colorAdmin h-screen'>
      <header className='w-full relative h-full '>
       <div className='w-full absolute top-0'>
       <Header
          id="abrirMenu"
          onClick={toggleMenu}
          menu={menu}
        />
              
        
         <article className='relative  top-32 pl-5 '>
           <Cards/>
           
         </article>
       </div>
      </header>
      <aside className={`left-0 absolute transition-transform duration-300 ease-in-out transform ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
          {menu && (
            <Sidebar
              onClick={abrirMenu}
              style="w-5 absolute right-10 top-7 t z-10 "
              id="cerrarMenu"
            />
          )}
        </aside>
            
        </div>
      </>
    )
  }

export default HomeAdmin;
