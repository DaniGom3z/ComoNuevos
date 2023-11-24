import React, { useState } from 'react';
import Header from '../../oraganisms/header'; // Corregí el typo en 'organisms'
import axios from 'axios';
import fondo from '../../../img/deportivo.jpg'
import Fotter from '../../oraganisms/fotter'
import validator from 'validator';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [dia, setDia] = useState('');
  const[error,setError]=useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)
  
    try {
      const response = await axios.post('http://localhost:9000/agendarcita', { nombre, correo, dia });
      console.log(response.data);
      console.log("cita agendada con exito")
      alert("Cita agendada con éxito, lindo día"); // Puedes manejar la respuesta según tus necesidades
    } catch (error) {
      console.error('Error al agregar cita:', error.message);
  
      if (error.response) {
        // Si la respuesta del servidor tiene un estado, puedes acceder al mensaje de error
        setError(error.response.data.error || 'Error desconocido en el servidor');
      } else if (error.message) {
        // Si no hay una respuesta del servidor, pero hay un mensaje de error en la excepción, úsalo
        setError(error.message);
      } else {
        // Si no hay un mensaje de error, muestra un mensaje genérico
        setError('Error al agregar cita. Inténtalo de nuevo más tarde.');
      }
    }
  };


  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="flex justify-center  h-3/4 items-center">
          <img src={fondo} className='-z-10 absolute w-full h-full top-0' />
          <form
            onSubmit={handleSubmit}
            className="h-96 w-3/4 items-center shadow relative flex flex-col shadow-red-500 rounded-md"
            >
            <h2 className='text-xl font-bold text-center absolute w-2/4 top-0 p-2 border-b-2 border-black'>Agendar cita</h2>
            <div className='flex flex-col w-full md:w-2/4 items-center justify-center relative p-20 gap-5 '>
           <input 
           className='p-2 w-full border-black border-2 rounded shadow-xl'
           type="text" 
           placeholder='nombre'
           required
           value={nombre} 
           onChange={(e) => setNombre(e.target.value)}
            />
            <input 
            className='p-2 w-full border-black border-2 rounded shadow-xl'
            type="email"
            required
            placeholder='correo electronico'
             value={correo} 
             onChange={(e) => setCorreo(e.target.value)} 
             />
           <input 
           className='p-2 w-full border-black border-2 rounded shadow-xl'
           type="date"
           required
           placeholder='dia'
            value={dia} 
            onChange={(e) => setDia(e.target.value)}
             />
            {error && <p className="absolute bottom-5 text-red-500">{error}</p>}
            </div>
            <div className='w-full flex justify-center '>
            <button type="submit" className="bg-blue-500 w-2/4 text-white shadow-md py-2 rounded">
              Agendar Cita
            </button>
            </div>
          </form>
        </div>
        <div className='h-96 w-full gap-10 -z-10 fotter absolute -bottom-96 flex items-center justify-around'>
                <Fotter/>
            </div>
      </div>
    </>
  );
};

export default Form;
