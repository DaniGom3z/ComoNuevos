import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import Header from '../organisms/header';
import Sidebar from '../organisms/sidebar';

const ListaCitas = () => {
  const [citas, setCitas] = useState(null);
  const [error, setError] = useState(null);
 

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.get('http://localhost:9000/citas', {
          headers: {
            Authorization: token,
          },
        });
        const citasNoEliminadas = response.data.filter(citas => citas.eliminada_logicamente === 0);

        console.log('respuesta exitosa', response.data);
        setCitas(citasNoEliminadas);
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



  const handleEliminarCitaLogicamente = async (idCita) => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.delete(`http://localhost:9000/eliminarcitalogica/${idCita}`, {
          headers: {
            Authorization: token,
          },
        });

        fetchData();
        console.log('respuesta exitosa', response.data);
        alert('Eliminaste lógicamente la cita');
      } else {
        console.log('no se guardo el token pai');
      }
    } catch (error) {
      console.error('error al eliminar la cita logicamente', error);
      alert('No se pudo eliminar la cita lógicamente');
    }
  };

  useEffect(() => {
    fetchData();
  },);

  // Filtra las citas según si se deben mostrar eliminadas lógicamente o no
 

  return (
    <div className="min-h-screen w-screen colorAdmin overflow-x-auto flex flex-col">
      <Header />
      <div className="flex flex-grow justify-between">
        <Sidebar />
        <div className="flex flex-grow flex-wrap items-start pt-20 pl-10 pr-10 justify-center">
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
                <th className="p-2 w-1/4 border ">Acciones</th>
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
                      <td className="border ">{cita.dia}</td>
                      <td className=' border flex p-1 '>
                       
                        <button
                          className="bg-red-500 font-semibold w-full text-white p-2 rounded"
                          onClick={() => handleEliminarCitaLogicamente(cita.id_cita)}
                        >
                          Eliminar Cita
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
  );
};

export default ListaCitas;
