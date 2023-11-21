import React, { useState, useRef, useEffect } from 'react';
import Avatar from '../atoms/avatar';
import avatar1 from '../../avatar/henry.jpg';
import avatar2 from '../../avatar/angus.jpg';
import mensajes from '../../img/enviar-mensaje.png';
import notificaciones from '../../img/notificaciones.png';
import usuario from '../../img/usuario.png';
import axios from 'axios';


const NavbarAdmin = () => {
  const [notificacionesAbierto, setNotificacionesAbierto] = useState(false);
  const [mensajesAbierto, setMensajesAbierto] = useState(false);
  const [usuariosAbierto, setUsuariosAbierto] = useState(false);
  const [usuario, setUsuario]=useState()
  const toggleNotificaciones = () => {
    setNotificacionesAbierto(!notificacionesAbierto);
  };

  const toggleMensajes = () => {
    setMensajesAbierto(!mensajesAbierto);
  };

  const toggleUsuarios = () => {
    setUsuariosAbierto(!usuariosAbierto);
    handleUsuarios();
  };

  const handleUsuarios =async()=>{
    try{
      const token=localStorage.getItem('token')
      if(token){
        const response = await axios.get(`http://localhost:9000/informacion/`,{
          headers:{
            Authorization: token,
          },
        });
        console.log(response.data.usuario);
          setUsuario(response.data.usuario)
        console.log("respuesta exitosa", response.data);
      } else {
        console.log('el token no se guardo pai');
      }
    } catch (error) {
      console.error('error al eliminar la encontrar informacion', error);
      alert('No se encontro la informacion');
    }
  };

  // Refs para los elementos de los menús
  const notificacionesRef = useRef(null);
  const mensajesRef = useRef(null);
  const usuariosRef = useRef(null);

  // Función para cerrar los menús al hacer clic fuera de ellos
  const cerrarMenus = (event) => {
    if (
      notificacionesRef.current &&
      !notificacionesRef.current.contains(event.target)
    ) {
      setNotificacionesAbierto(false);
    }

    if (mensajesRef.current && !mensajesRef.current.contains(event.target)) {
      setMensajesAbierto(false);
    }

    if (usuariosRef.current && !usuariosRef.current.contains(event.target)) {
      setUsuariosAbierto(false);
    }
  };

  // Agregar un event listener al componente para cerrar los menús al hacer clic fuera de ellos
  useEffect(() => {
    document.addEventListener('click', cerrarMenus);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', cerrarMenus);
    };
  }, []);
  return (
    <>
      <div className='gap-10 flex items-center justify-end'>


{/* Sección de Notificaciones */}
<div className='relative' ref={notificacionesRef}>
  <button
    onClick={toggleNotificaciones}
    className='flex items-center space-x-4 cursor-pointer'
    >
    <img
      src={notificaciones}
      alt=''
      className='w-7 h-7 p-1 shadow-md rounded-full bg-blue-200'
      />
  </button>
  {/* Menú de notificaciones desplegable */}
  {notificacionesAbierto && (
    <div className='absolute top-full right-0 mt-2 w-48 bg-white shadow rounded border'>
      {/* Contenido del menú de notificaciones */}
      <div className='p-2 border-b-2'>Notificación 1</div>
      <div className='p-2 border-b-2'>Notificación 2</div>
      {/* Puedes agregar más notificaciones aquí */}
    </div>
  )}
</div>

{/* Sección de Mensajes */}
<div className='relative' ref={mensajesRef}>
  <button
    onClick={toggleMensajes}
    className='flex items-center space-x-4 cursor-pointer'
    >
    <img
      src={mensajes}
      alt=''
      className='w-7 h-7 p-1 shadow-md rounded-full bg-blue-200'
      />
  </button>
  {/* Menú de mensajes desplegable */}
  {mensajesAbierto && (
    <div className='absolute top-full right-0 mt-2 w-48 bg-white shadow rounded border'>
      {/* Contenido del menú de mensajes */}
      <div className='p-2 flex items-center space-x-2'>
        <Avatar src={avatar1} alt='Usuario' />
        <div className='border-b-2'>
          <div>Usuario 1</div>
          <div>Mensaje 1</div>
        </div>
      </div>
      <div className='p-2 flex items-center space-x-2'>
        <Avatar src={avatar2} alt='Usuario' />
        <div className='border-b-2'>
          <div>Usuario 2</div>
          <div>Mensaje 2</div>
        </div>
      </div>
      {/* Puedes agregar más mensajes aquí */}
    </div>
  )}
</div>

{/* Sección de Perfil */}
<div className='relative' ref={usuariosRef}>
  <button
    onClick={toggleUsuarios}
    className='flex items-center space-x-4 cursor-pointer'
    >
    <img
      src={usuario}
      alt=''
      className='w-7 h-7 p-1 shadow-md rounded-full bg-blue-200'
      />
  </button>
  {/* Menú de usuarios desplegable */}
  {usuariosAbierto && (
    <div className='absolute top-full right-0 mt-2 w-48 bg-white shadow rounded border'>
      {/* Contenido del menú de usuarios */}
      <div className='p-2 border-b-2'></div>
     
    </div>
  )}
</div>
  </div>
    </>
  )
}

export default NavbarAdmin