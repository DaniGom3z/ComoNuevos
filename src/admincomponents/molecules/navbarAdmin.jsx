import React, { useState, useRef, useEffect } from "react";
import Avatar from "../atoms/avatar";
import avatar1 from "../../avatar/henry.jpg";
import avatar2 from "../../avatar/angus.jpg";
import user from "../../avatar/usuario.png"
import mensajes from "../../img/enviar-mensaje.png";

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  const [notificacionesAbierto, setNotificacionesAbierto] = useState(false);
  const [mensajesAbierto, setMensajesAbierto] = useState(false);
  const [usuariosAbierto, setUsuariosAbierto] = useState(false);
  const [usuario, setUsuario] = useState();
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

  const handleUsuarios = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await axios.get(`http://localhost:9000/informacion`, {
          headers: {
            Authorization: token,
          },
        });
        setUsuario(response.data.usuario);
        console.log("Respuesta exitosa", response.data);
      } else {
        console.log("El token no se guardó correctamente");
      }
    } catch (error) {
      console.error("Error al obtener la información del administrador", error);
      toast.error("No se encontró la información del administrador",{ position: toast.POSITION.BOTTOM_RIGHT });
    }
  };

  const handleSignOut = async () => {
    try {
      const token = localStorage.getItem("token");
  
      if (token) {
        const response = await axios.post("http://localhost:9000/cerrarSesion", null, {
          headers: {
            Authorization: token,
          },
        });
        
        localStorage.removeItem("token");
        setUsuario(null);
        
        console.log("Respuesta exitosa", response.data);
      } else {
        console.log("El token no se guardó correctamente");
      }
    } catch (error) {
      console.error("Error al cerrar sesión", error);
      toast.error("Error al cerrar sesión", { position: toast.POSITION.BOTTOM_RIGHT });
    }
  };
  

  const notificacionesRef = useRef(null);
  const mensajesRef = useRef(null);
  const usuariosRef = useRef(null);

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

  useEffect(() => {
    document.addEventListener("click", cerrarMenus);

    return () => {
      document.removeEventListener("click", cerrarMenus);
    };
  }, []);
  return (
    <>
      <div className="gap-10 flex items-center justify-end">
       
     

        {/* Sección de Mensajes */}
        <div className="relative" ref={mensajesRef}>
          <button
            onClick={toggleMensajes}
            className="flex items-center space-x-4 cursor-pointer"
          >
            <img
              src={mensajes}
              alt=""
              className="w-7 h-7 max-md:w-5 max-md:h-5 p-1 shadow-md rounded-full bg-blue-200"
            />
          </button>
          {/* Menú de mensajes desplegable */}
          {mensajesAbierto && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow rounded border">
              {/* Contenido del menú de mensajes */}
              <div className="p-2 flex items-center space-x-2">
                <Avatar src={avatar1} alt="Usuario" />
                <div className="border-b-2">
                  <div>Usuario 1</div>
                  <div>Mensaje 1</div>
                </div>
              </div>
              <div className="p-2 flex items-center space-x-2">
                <Avatar src={avatar2} alt="Usuario" />
                <div className="border-b-2">
                  <div>Usuario 2</div>
                  <div>Mensaje 2</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={usuariosRef}>
          <button
            onClick={toggleUsuarios}
            className="flex items-center space-x-4 cursor-pointer"
          >
           <Avatar src={user} />
          </button>
          {usuariosAbierto && (
            <div className="absolute z-50 top-full right-0 mt-2 w-96 max-md:w-44 h-auto p-5 bg-white shadow rounded border">
              {usuario && (
                <div>
                  <div><p className=" text-black font-bold">Nombre:</p>{usuario.nombre} </div>
                  <div><p className=" text-black font-bold">Correo:</p>{usuario.email} </div>
                  <Link to="/">
                  <button onClick={handleSignOut} className="bg-red-400 w-32 p-2 shadow h-auto rounded mt-5">Cerrar Sesion</button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
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
  );
};

export default NavbarAdmin;
