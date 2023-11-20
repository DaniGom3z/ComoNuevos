import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../organisms/header'
import Sidebar from '../organisms/sidebar';
import { BarLoader } from 'react-spinners';
const ListaCitas = () => {

    const [citas, setCitas]=useState(null)
    const [error, setError]=useState(null)

    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
  
        if (token) {
          const response = await axios.get('http://localhost:9000/citas', {
            headers: {
              Authorization: token,
            },
          });
          console.log('respuesta exitosa', response.data);
          
          setCitas(response.data);
        } else {
          console.log('el token no se guardo pai');
        }
      } catch (error) {
        console.error('Error', error);
  
        if (error.response) {
          console.error('Respuesta del servidor:', error.response.data);
        }
  
        setError('Hubo un problema al cargar los datos.');
      }
    };

    const handleEliminarCitaFisicamente= async(idCita)=>{
          try{
            const token = localStorage.getItem('token');
            if(token){
            const response = await axios.delete(`http://localhost:9000/eliminarcitafisica/${idCita}`,{
                    headers:{
                      Authorization: token
                    },
            });
            fetchData()
              console.log("respuesta exitosa", response.data);
              alert("eliminaste fisicamente la cita")
            }else{
              console.log('el token no se guardo pai');
            }


          }catch(error){
            console.error("error al eliminar la cita", error)
            alert("no se pudo eliminar la cita fisicamente")
          }
    }
const handleEliminarCitaLogicamente =async(idCita)=>{
          try{
              const token =localStorage.getItem('token')
              if(token){
              const response =await axios.delete(`http://localhost:9000/eliminarcitalogica/${idCita}`,{
                        headers:{
                          Authorization: token
                        },

              })
              fetchData()
                console.log("respuesta exitosa", response.data)
                alert("eliminaste logicamente la cita")
            }else{
              console.log("no se guardo el token pai")
            }
          }catch(error){
              console.error("error al eliminar la cita logicamente", error)
              alert("no se puedo eliminar la cita logicamente")
          }
}


useEffect(()=>{
  fetchData()
},[])
    return (
      <div className="min-h-screen w-screen admin colorAdmin flex flex-col">
      <Header />
      <div className="flex flex-grow justify-between">
        <Sidebar />
        <div className="flex flex-grow flex-wrap items-start pt-20 pl-10 pr-10 justify-center">
          {error ? (
            <p className="text-red-500 absolute top-10">{error}</p>
          ) : (
            
              <table className="relative bg-red-50 rounded-md">
                <thead className="bg-blue-100">
                  <tr>
                    <th className='p-2 w-full absolute bg-blue-200 text-xl -top-16 text-center'>Lista de Citas</th>
                  </tr>
                  <tr>
                    <th className="p-2 w-fit border-black border-l">ID</th>
                    <th className="p-2 w-fit border-black border-l">Nombre</th>
                    <th className="p-2 w-fit border-black border-l">Correo</th>
                    <th className="p-2 w-fit border-l border-black">Día</th>
                    <th className="p-2 w-1/4 border-l border-black">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {citas ? (
                    citas.map((cita) => (
                      <tr className='text-center bg-white' key={cita.id_cita}>
                        <td className="border-l border-black">{cita.id_cita}</td>
                        <td className="border-l border-black">{cita.nombre}</td>
                        <td className="border-l border-black">{cita.correo}</td>
                        <td className="border-l border-black">{cita.dia}</td>
                        <td className='border-l pl-2 pt-2 pb-2 pr-2 flex gap-5 border-black'>
                          <button
                            className="bg-red-500 font-semibold text-white p-2 rounded"
                            onClick={() => handleEliminarCitaFisicamente(cita.id_cita)}
                          >
                            Eliminar físicamente
                          </button>
                          <button
                            className="bg-yellow-500 font-semibold text-white p-2 rounded"
                            onClick={() => handleEliminarCitaLogicamente(cita.id_cita)}
                          >
                            Eliminar lógicamente
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
              </table>
            
          )}
        </div>
      </div>
    </div>
          );
        };

export default ListaCitas;
