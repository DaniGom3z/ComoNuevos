import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Text from '../atoms/text';
import Lista from '../atoms/lista';
const Sidebar = () => {
    const [carrosMenuOpen, setCarrosMenuOpen] = useState(false);

    const toggleCarrosMenu = () => {
      setCarrosMenuOpen(!carrosMenuOpen);
    };
  
  return (
    <>
    
    <div className='bg-slate-800 shadow w-72'>
          <Text
          text="Menu"
          style="relative top-10 pl-2 text-3xl text-cyan-600 font-black pb-1 border-b-2"
          />
        {/* Contenido del menú lateral */}
        <nav className='p-4 relative top-20'>
          <ul className='space-y-5'>
            <Link to="/admin">
            <Lista
            text="Inicio"
            style="text-white cursor-pointer hover:text-gray-300 text-2xl font-bold p-2 duration-1000 hover:bg-slate-900 "
            />
            </Link>
            <Lista
            text="Citas"
            style="text-white cursor-pointer relative hover:text-gray-300 text-xl font-semibold p-2 duration-1000 hover:bg-slate-900 "
            />
            <li className='text-white cursor-pointer hover:text-gray-300 '>
              {/* Utiliza onClick para manejar el estado del menú desplegable */}
              <div onClick={toggleCarrosMenu} className='flex bg-opacity-20 text-xl font-semibold  p-2 hover:bg-slate-900 duration-1000 justify-between items-center'>
                Carros
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`h-6 w-6 transition-transform ${
                    carrosMenuOpen ? 'transform rotate-180' : 'transform rotate-0'
                  }`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
              {/* Contenido del menú desplegable */}
              {carrosMenuOpen && (
                <ul className='ml-4 space-y-2'>
                  <Link to="/sedanesAdmin">
                  <Lista
                  text="Sedanes"
                  style="text-blue-600 cursor-pointer p-1 hover:text-gray-300 duration-500 hover:bg-slate-900"
                  />
                  </Link>
                  <Link to="/pickupAdmin">
                  <Lista
                  text="Pick up"
                  style="text-blue-600 cursor-pointer p-1 hover:text-gray-300 duration-500 hover:bg-slate-900"
                  />
                  </Link>
                  <Link to="/deportivosAdmin">
                  <Lista
                  text="Deportivos"
                  style="text-blue-600 cursor-pointer p-1 hover:text-gray-300 duration-500 hover:bg-slate-900"
                  />
                  </Link>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    
    </>
  )
}

export default Sidebar