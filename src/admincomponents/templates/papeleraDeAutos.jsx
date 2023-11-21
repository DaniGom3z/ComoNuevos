import React, { useEffect, useState } from 'react'
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
const PapeleraDeAutos = () => {
const[carros,setCarros]=useState(null)
const [error, setError] = useState(null);



const fechtData=async()=>{
  try{
    const token =localStorage.getItem('token');

    if(token){
      const response =await axios.get('http://localhost:9000/auto',{
        headers:{
          Authorization: token,
        },
      });

      const autosNoEliminadosLogicamente = response.data.filter(carros=> carros.eliminada_logicamente===1)
      setCarros(autosNoEliminadosLogicamente)
      console.log("respuesta exitosa", response.data)
    }
  }catch(error){
      console.error("Error", error)
      if(error.response){
        console.error("respuesta del servidor", error.response.data)
      }
      setError("hubo un problema en cargar los datos")
  }
  
}

const handleEliminarAutoFisicamente =async(idAuto)=>{
      try{
        const token=localStorage.getItem('token')
        if(token){
          const response = await axios.delete(`http://localhost:9000/eliminacionfisica/${idAuto}`,{
            headers:{
              Authorization: token,
            },
          });
          console.log("respuesta exitosa", response.data)
          fechtData()
          alert('Eliminaste físicamente la el auto');
        } else {
          console.log('el token no se guardo pai');
        }
      } catch (error) {
        console.error('error al eliminar la cita', error);
        alert('No se pudo eliminar la cita físicamente');
      }
    };

const handleRecuperarAuto=async(idAuto)=>{
      try{
        const token =localStorage.getItem('token');

        if(token){
          const response =await axios.put(`http://localhost:9000/recuperarauto/${idAuto}`,null,{
            headers:{
              Authorization: token,
            },
          });
          console.log("respuesta exitosa", response.data)
          alert("se recupero el auto exitosamente")
        }else{
            console.log("no se guardo el token pai")
        }
    }catch(error){
        console.error("Error", error)
        if(error.response){
            console.error("respuesta del servidor", error.response.data)
        }
        setError("hubo un problema al cargar los datos")
    }
  }
    useEffect(()=>{
    fechtData()

    },)

  return (
    <>
  <div className="min-h-screen w-screen admin colorAdmin flex flex-col">
      <Header />
      <div className="flex flex-grow justify-between">
        <Sidebar />
        <div className="flex flex-grow flex-wrap items-start pt-20 pl-10 pr-10 justify-center">
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
                      <td className='  flex p-1 space-x-1 '>
                        <button
                          className="bg-red-500 font-semibold text-white p-2 rounded"
                          onClick={() => handleEliminarAutoFisicamente(carro.id_auto)}
                        >
                          Eliminar Permanentemente
                        </button>
                        <button
                          className="bg-green-500 font-semibold text-white p-2 rounded"
                          onClick={() => handleRecuperarAuto(carro.id_auto)}
                        >
                          Restaurar Auto
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
      </div>
    </div>
    </>
  )
}

export default PapeleraDeAutos