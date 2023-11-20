import React,{useState} from 'react';
import Modal from './modal'

const Tabla = ({text, autos}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
    
   
  

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{text}</h1>

      <div className="mb-4">
        <button className='bg-blue-400 p-3 shadow text-white text-md font-semibold rounded' onClick={() => setModalIsOpen(true)}>Agregar Auto</button>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nombre del Carro</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
              <tbody>
        {autos && autos.map((carro,index) => (
          <tr key={`${carro.id_autos || index}-${carro.nombre || index}`}>
            <td className="border p-2">{carro.id_autos}</td>
            <td
              className="border p-2 cursor-pointer text-blue-500 relative"
            >
              {carro.nombre} {carro.precio}
            </td>
            <td className="border p-2">
              <button
                className="bg-yellow-500 text-white p-2 rounded mr-2"
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>

      {/* Mostrar características del sedán seleccionado */}
      

      {/* Modal para editar características */}
      
    </div>
  );
};

export default Tabla;
