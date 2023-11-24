
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import eliminar from '../../img/eliminar.png'
import recuperar from '../../img/recuperar.png'
const TablaPapelera = ({carros}) => {
  
  const token=localStorage.getItem('token')
    const [error, setError]=useState(null)
    const handleEliminarAutoFisicamente =async(idAuto)=>{
        try{
          if(token){
            const response = await axios.delete(`http://localhost:9000/eliminacionfisica/${idAuto}`,{
              headers:{
                Authorization: token,
              },
            });
            console.log("respuesta exitosa", response.data)
            
            toast.success('Eliminaste peramentemente el auto', { position: toast.POSITION.BOTTOM_RIGHT });
            
          } else {
            console.log('el token no se guardo pai');
          }
        } catch (error) {
          console.error('error al eliminar la cita', error);
          toast.error('No se pudo eliminar la cita físicamente', { position: toast.POSITION.BOTTOM_RIGHT });
          
        }
      };
    
    const handleRecuperarAuto=async(idAuto)=>{
        try{
    
          if(token){
            const response =await axios.put(`http://localhost:9000/recuperarauto/${idAuto}`,null,{
              headers:{
                Authorization: token,
              },
            });
            console.log("respuesta exitosa", response.data)
            toast.success("se recupero el auto exitosamente", { position: toast.POSITION.BOTTOM_RIGHT })
            
          }else{
              console.log("no se guardo el token pai")
          }
      }catch(error){
          console.error("Error", error)
          toast.error("no se pudo recuperar el auto", { position: toast.POSITION.BOTTOM_RIGHT })
          
          if(error.response){
              console.error("respuesta del servidor", error.response.data)
          }
          setError("hubo un problema al cargar los datos")
      }
    }
  return (
   <>
   <div className='container mx-auto mt-8 h-96 overflow-auto'>
    <table className="relative w-full top-32 bg-transparent border rounded-md">
            <thead className="bg-transparent border-b">
              <tr>
                <th className='p-2 w-full absolute bg-transparent text-2xl -top-16 text-left'>Papelera de Autos</th>
              </tr>
              <tr>
                <th className="p-2 w-fit  border">ID</th>
                <th className="p-2 w-fit border  ">Nombre</th>
                <th className="p-2 w-fit border  ">Imagen</th>
                <th className="p-2 w-1/4 border ">Acciones</th>
              </tr>
            </thead>
            {error ? (
              <p className="text-red-500 absolute text-center w-full top-14 ">{error}</p>
              ) : (
              <tbody>
                {carros? (
                  carros.map((carro) => (
                    <tr className='text-center border' key={carro.id_auto}>
                      <td className="border ">{carro.id_auto}</td>
                      <td className="border ">{carro.nombre}</td>
                      <td className=" border  p-1 w-44"><img className='w-24 ' src={carro.imagen} alt=""/></td>
                      <td className='  flex justify-center gap-5 p-1 space-x-1 '>
                        <button
                          className="bg-red-500 font-semibold text-white p-2 rounded"
                          onClick={() => handleEliminarAutoFisicamente(carro.id_auto)}
                          >
                          <img className='w-10' src={eliminar} alt="" />
                        </button>
                        <button
                          className="bg-green-500 font-semibold text-white p-2 rounded"
                          onClick={() => handleRecuperarAuto(carro.id_auto)}
                          >
                            <img className='w-10' src={recuperar} alt="" />
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

export default TablaPapelera