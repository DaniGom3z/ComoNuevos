import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Text from '../atoms/text';
import Lista from '../atoms/lista';
import img from '../../img/papelera.png'
const Sidebar = () => {
    const [carrosMenuOpen, setCarrosMenuOpen] = useState(false);

    const toggleCarrosMenu = () => {
      setCarrosMenuOpen(!carrosMenuOpen);
    };
  
  return (
    <>
    
    <div className='shadow-md bg-violet-700 w-72 '>
          <Text
          text="Menu"
          style="relative top-10 pl-2 titulo tracking-widest drop-shadow-md shadow-slate-900 text-4xl text-white first-letter:text-red-500 font-black pb-1 border-b-2 pointer-events-none "
          />
        <nav className='p-4 relative top-20'>
          <ul className='space-y-1'>
            <Link to="/admin">
            <Lista
            text="Inicio"
            style="text-white rounded-xl  hover:shadow-xl cursor-pointer hover:text-white text-md font-semibold p-2 duration-300 hover:bg-purple-900 "
            />
            </Link>
            <Link to="/citas">
            <Lista
            text="Administrar Citas"
            style="text-white rounded-xl  hover:scale-105 hover:shadow-xl cursor-pointer relative hover:text-white text-xl font-semibold p-2 duration-300 hover:bg-purple-900 "
            />
            </Link>
            <li className='text-white cursor-pointer hover:text-white'>
              {/* Utiliza onClick para manejar el estado del menú desplegable */}
              <div onClick={toggleCarrosMenu} className='flex rounded-xl  bg-opacity-20 text-xl hover:shadow-xl font-semibold hover:scale-105 p-2 hover:bg-purple-900 duration-300 justify-between items-center'>
                Agregar carros
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
                <ul className=' absolute right-0 pl-2 pr-4 w-full'>
                  <Link to="/sedanesAdmin">
                  <Lista
                  text="Sedanes"
                  style="text-white cursor-pointer rounded-xl font-semibold p-2 hover:shadow-xl hover:scale-105 hover:text-gray-300 duration-300 hover:bg-purple-900"
                  />
                  </Link>
                  <Link to="/pickupAdmin">
                  <Lista
                  text="Pick up"
                  style="text-white cursor-pointer rounded-xl font-semibold p-2 hover:shadow-xl  hover:scale-105 hover:text-gray-300 duration-300 hover:bg-purple-900"
                  />
                  </Link>
                  <Link to="/deportivosAdmin">
                  <Lista
                  text="Deportivos"
                  style="text-white cursor-pointer rounded-xl font-semibold p-2 hover:shadow-xl  hover:scale-105 hover:text-gray-300 dug-purple-900 hover:bg-purple-900"
                  />
                  </Link>
                </ul>
              )}
            </li>
            <Link to="/papeleraCitas">
           <Lista
           text={"Papelera de Citas"}
           image={img}
           styleImg="w-7 bg-blue-200 rounded-full  absolute right-10"
           style="relative font-semibold rounded-xl   hover:shadow-xl border-white flex items-center  mt-5 hover:scale-105 p-2 text-white top-96 hover:text-white duration-300 hover:bg-purple-900"
           />
           </Link>
           <Link to="/papeleraAutos">
           <Lista
           text={"Papelera de Autos"}
           image={img}
           styleImg="w-7 bg-blue-200 rounded-full  absolute right-10"
           style="relative flex font-semibold  items-center hover:shadow-xl rounded-xl  border-white  mt-5 p-2 hover:scale-105 text-white top-96 hover:text-white duration-300 hover:bg-purple-900"
           />
           </Link>
          </ul>
        </nav>
      </div>
    
    </>
  )
}

export default Sidebar