import React, { useState } from 'react';
import Modal from './modal';
import axios from 'axios';
import ModalEditar from './modalEditar';

const Tabla = ({ text, autos }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const [modalEditarIsOpenArray, setModalEditarIsOpenArray] = useState(Array(autos.length).fill(false));

  const handleEliminarFisicamente = async (idAuto) => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.delete(`http://localhost:9000/eliminacionlogica/${idAuto}`, {
          headers: {
            Authorization: token,
          },
        });
        console.log('eliminacion exitosa', response.data);
        alert('se elimino correctamente');
      } else {
        console.log('el token no se guardo pai');
      }
    } catch (error) {
      console.error('error al eliminar el coche', error);
      alert('no se puedo eliminar el coche');
      if (error.response) {
        console.error('respuesta del servidor', error.response.data);
      }
    }
    setError('hubo un problema al eliminar los datos');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{text}</h1>

      <div className="mb-4">
        <button className="bg-blue-400 p-3 shadow text-white text-md font-semibold rounded" onClick={() => setModalIsOpen(true)}>
          Agregar Auto
        </button>
        <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nombre del Carro</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autos &&
            autos.map((carro, index) => (
              <tr key={`${carro.id_auto || index}-${carro.nombre || index}`}>
                <td className="border text-center font-semibold  p-2">{carro.id_auto}</td>
                <td className="border text-center font-semibold  p-2">{carro.nombre}</td>
                <td className="border p-2 cursor-pointer text-gray-400 font-semibold relative">
                  ${carro.precio}
                </td>
                <td className="border p-2">
                  <button
                    className="bg-yellow-500 text-white p-2 rounded mr-2"
                    onClick={() => {
                      // Actualizar el estado del modal de edición específico
                      const newModalEditarIsOpenArray = [...modalEditarIsOpenArray];
                      newModalEditarIsOpenArray[index] = true;
                      setModalEditarIsOpenArray(newModalEditarIsOpenArray);
                    }}
                  >
                    Editar
                  </button>
                  <ModalEditar carro={carro} isOpen={modalEditarIsOpenArray[index]} onClose={() => setModalEditarIsOpenArray(new Array(autos.length).fill(false))} />
                  <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleEliminarFisicamente(carro.id_auto)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
