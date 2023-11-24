
import React, { useState } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eliminar from '../../img/eliminar.png'
const TablaCitas = ({citas}) => {

    const [error, setError] = useState(null);
  
  
  
    const handleEliminarCitaLogicamente = async (idCita) => {
      try {
        const token = localStorage.getItem('token');
  
        if (token) {
          const response = await axios.delete(`http://localhost:9000/eliminarcitalogica/${idCita}`, {
            headers: {
              Authorization: token,
            },
          });
  
          
          
          toast.success('Eliminaste lógicamente la cita',{ position: toast.POSITION.BOTTOM_RIGHT });
          
        } else {
          console.log('no se guardo el token pai');
        }
      } catch (error) {
        console.error('error al eliminar la cita logicamente', error);
        toast.error('No se pudo eliminar la cita lógicamente');
        
        setError("no se pudo eliminar la cita logicamente",{ position: toast.POSITION.BOTTOM_RIGHT })
      }
    };
  
   
  
  return (
    <>
    <div className='container mx-auto mt-8 h-96 overflow-auto'>

    <table className="relative w-full top-32 bg-transparent border rounded-md">
            <thead className="bg-transparent border-b">
              <tr>
                <th className='p-2 w-full absolute bg-transparent text-2xl -top-16 text-left'>Lista de Citas</th>
              </tr>
              <tr>
                <th className="p-2 w-fit  border">ID</th>
                <th className="p-2 w-fit border  ">Nombre</th>
                <th className="p-2 w-fit border  ">Correo</th>
                <th className="p-2 w-fit border ">Día</th>
                <th className="p-2 w-fit border">Acciones</th>
              </tr>
            </thead>
            {error ? (
              <p className="text-red-500 absolute text-center w-full top-14 ">{error}</p>
              ) : (
                <tbody>
                {citas ? (
                  citas.map((cita) => (
                    <tr className='text-center border' key={cita.id_cita}>
                      <td className="border ">{cita.id_cita}</td>
                      <td className="border ">{cita.nombre}</td>
                      <td className=" border ">{cita.correo}</td>
                      <td className="border">{new Date(cita.dia).toISOString().split('T')[0]}</td>
                      <td className=' border p-1 flex items-center justify-center'>
                       
                        <button
                          className="bg-red-500 w-fit font-semibold text-white p-2 rounded"
                          onClick={() => handleEliminarCitaLogicamente(cita.id_cita)}
                          >
                          <img className='w-10' src={eliminar} alt="" />
                        </button>
                      </td>
                    </tr>
                  ))
                  ) : (
                    <tr className='flex justify-center absolute items-center text-center w-full h-full'>
                    <td>
                      <BarLoader color="blue" height={5} width={150} />
                    </td>
                  </tr>
                )}
              </tbody>
            )}
          </table>
          </div>
          <ToastContainer
           position="bottom-right"
           autoClose={2000} 
           hideProgressBar={false} 
           newestOnTop={false} 
           closeOnClick={false}
           pauseOnFocusLoss={false}
           pauseOnHover={false}
           rtl={false} 
           draggable 
           
          />
    </>
  )
}

export default TablaCitas