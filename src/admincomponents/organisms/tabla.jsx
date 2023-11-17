import React, { useState } from 'react';

const Tabla = ({text}) => {
     // Estado para almacenar la lista de sedanes
  const [sedanes, setSedanes] = useState([
    { id: 1, marca: 'Toyota', modelo: 'Camry' },
    { id: 2, marca: 'Honda', modelo: 'Accord' },
    // Agrega más sedanes según sea necesario
  ]);

  // Estado para el formulario de nuevo sedán
  const [nuevoSedan, setNuevoSedan] = useState({ marca: '', modelo: '' });

  // Función para manejar el cambio en el formulario de nuevo sedán
  const handleChange = (e) => {
    setNuevoSedan({ ...nuevoSedan, [e.target.name]: e.target.value });
  };

  // Función para agregar un nuevo sedán a la lista
  const agregarSedan = () => {
    setSedanes([...sedanes, { id: sedanes.length + 1, ...nuevoSedan }]);
    setNuevoSedan({ marca: '', modelo: '' });
  };

  // Función para eliminar un sedán de la lista
  const eliminarSedan = (id) => {
    const nuevaLista = sedanes.filter((sedan) => sedan.id !== id);
    setSedanes(nuevaLista);
  };

  return (
    <>
     <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{text}</h1>

      {/* Formulario para agregar un nuevo sedán */}
      <div className="mb-4">
        <input
          type="text"
          name="marca"
          value={nuevoSedan.marca}
          onChange={handleChange}
          placeholder="Marca"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="modelo"
          value={nuevoSedan.modelo}
          onChange={handleChange}
          placeholder="Modelo"
          className="border p-2 mr-2"
        />
        <button
          onClick={agregarSedan}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Agregar Sedán
        </button>
      </div>

      {/* Tabla de sedanes */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Marca</th>
            <th className="border p-2">Modelo</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sedanes.map((sedan) => (
            <tr key={sedan.id}>
              <td className="border p-2">{sedan.id}</td>
              <td className="border p-2">{sedan.marca}</td>
              <td className="border p-2">{sedan.modelo}</td>
              <td className="border p-2">
                <button
                  onClick={() => eliminarSedan(sedan.id)}
                  className="bg-red-500 text-white p-2 rounded mr-2"
                >
                  Eliminar
                </button>
                {/* Puedes agregar más botones para editar u otras acciones */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Tabla