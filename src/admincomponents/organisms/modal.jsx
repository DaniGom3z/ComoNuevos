import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const ModalAgregarAuto = ({ isOpen, onClose }) => {
  const [caracteristicas, setCaracteristicas] = useState({
    nombre: '',
    precio: '',
    motor: '',
    cilindrada: '',
    potencia: '',
    torque: '',
    cilindros: '',
    valvulas: '',
    alimentacion: '',
    traccion: '',
    transmicion: '',
    velocidad_maxima: '',
    velocidades: '',
    tipo: '',
    puertas: '',
    largo: '',
    alto: '',
    peso: '',
    capacidad_del_tanque: '',
    consumo: '',
    color: '',
    imagenFrontal: null,
    imagenInterior: null,
    imagenLateral: null,
    
  });
  console.log('Características:', caracteristicas);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaracteristicas({ ...caracteristicas, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCaracteristicas({ ...caracteristicas, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tokenAlmacenado = localStorage.getItem('token');

    try {
      const formData = new FormData();
      // Agrega campos de texto
      formData.append('nombre', caracteristicas.nombre);
      formData.append('precio', caracteristicas.precio);
      formData.append('motor', caracteristicas.motor);
      formData.append('cilindrada', caracteristicas.cilindrada);
      formData.append('potencia', caracteristicas.potencia);
      formData.append('torque', caracteristicas.torque);
      formData.append('cilindros', caracteristicas.cilindros);
      formData.append('valvulas', caracteristicas.valvulas);
      formData.append('alimentacion', caracteristicas.alimentacion);
      formData.append('traccion', caracteristicas.traccion);
      formData.append('transmicion', caracteristicas.transmicion);
      formData.append('velocidad_maxima', caracteristicas.velocidad_maxima);
      formData.append('velocidades', caracteristicas.velocidades);
      formData.append('tipo', caracteristicas.tipo);
      formData.append('puertas', caracteristicas.puertas);
      formData.append('largo', caracteristicas.largo);
      formData.append('alto', caracteristicas.alto);
      formData.append('peso', caracteristicas.peso);
      formData.append('capacidad_del_tanque', caracteristicas.capacidad_del_tanque);
      formData.append('consumo', caracteristicas.consumo);
      formData.append('color', caracteristicas.color);
      formData.append('imagenFrontal', caracteristicas.imagenFrontal);
      formData.append('imagenInterior', caracteristicas.imagenInterior);
      formData.append('imagenLateral', caracteristicas.imagenLateral);

      const response = await axios.post(
        "http://localhost:9000/autos",
        formData,
        {
          headers: {
            Authorization: tokenAlmacenado,
          
          },
        }
      );

      console.log('Respuesta exitosa:', response.data);
    } catch (error) {
      console.error('Error al agregar auto:', error);

      if (error.response) {
        console.error('Respuesta del servidor:', error.response.data);
      }
    }

    onClose();
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal para agregar auto"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-2xl -2 text-center">Agregar Auto</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="w-full md:w-1/2 pt">
        <label>
          nombre:
          <input
            type="text"
            name="nombre"
            value={caracteristicas.nombre}
            onChange={handleInputChange}
            className="w-full py-1 border border-gray-300 rounded"
            />
        </label>
        <label >
          precio:
          <input
            type="number"
            name="precio"
            value={caracteristicas.precio}
            onChange={handleInputChange}
            className="w-full py-1 border border-gray-300 rounded"
            />
        </label>
        <label>
          Motor:
          <select
            name="motor"
            id="motor"
            value={caracteristicas.motor}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">seleccionar Motor</option>
            <option value="v10">v10</option>
            <option value="v6 Turboalimentado">v6 Turboalimentado</option>
            <option value="Turboaliemtnado TSI">turboalimentado TSI</option>
            <option value="Turboalimentado de 4 cilindros en linea">turboalimentado de 4 cilindros en linea</option>
            <option value="v6">v6</option>
            <option value="v8">v8</option>
            <option value="4 cilindros en linea">4 cilindros en línea.</option>
            <option value="v8 sobrealimentado">v8 sobrealimentado</option>
          </select>
        </label>
        <label className="">
          cilindrada:
          <input
            type="text"
            name="cilindrada"
            value={caracteristicas.cilindrada}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          potencia:
          <input
            type="text"
            name="potencia"
            value={caracteristicas.potencia}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          torque:
          <input
            type="number"
            name="torque"
            value={caracteristicas.torque}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          cilindros:
          <input
            type="text"
            name="cilindros"
            value={caracteristicas.cilindros}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          valvulas:
          <input
            type="number"
            name="valvulas"
            value={caracteristicas.valvulas}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          alimentacion:
          <select
            name="alimentacion"
            id="alimentacion"
            value={caracteristicas.alimentacion}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Alimentacion</option>
            <option value="Inyeccion directa de combustible">inyeccion directa de combustible</option>
            <option value="Sobrealimentación">sobrealimentacion</option>
            <option value="Inyeccion directa">inyeccion directa</option>
          </select>
        </label>
        <label className="">
          traccion:
          <select
            name="traccion"
            id="traccion"
            value={caracteristicas.traccion}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Traccion</option>
            <option value="Total">total</option>
            <option value="Delantera">delantera</option>
            <option value="Trasera">trasera</option>
            <option value="Integral">integral</option>
          </select>
        </label>
        <label className="">
          transmicion:
          <select
            name="transmicion"
            id="transmision"
            value={caracteristicas.transmicion}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Transmisión</option> 
            <option value="Manual">Manual</option>
            <option value="Automatica">Automática</option>
            <option value="Semiautomatica">Semiautomática</option>
            <option value="Automatica CVT">Automática CVT</option>
            <option value="Manual automatizada">Manual automatizada</option>
            <option value="4x4">4x4</option>
            <option value="AWD">AWD</option>
            <option value="Automatica de doble embrague">Automática de doble embrague</option>
            <option value="Automatica de doble embregue">Automática de doble embregue</option>
            <option value="Variable continua">Variable continua</option>
          </select>
        </label>
        <label className="">
          velocidad maxima:
          <input
            type="number"
            name="velocidad_maxima"
            value={caracteristicas.velocidad_maxima}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
            </div>
          <div className='w-full md:w-1/2'>
        <label className="">
          velocidades:
          <input
            type="number"
            name="velocidades"
            value={caracteristicas.velocidades}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          tipo:
         <select 
         name="tipo" 
         id="tipo"
         value={caracteristicas.tipo}
         onChange={handleInputChange}
         className='w-full py-2 border border-gray-300 rounded'
         >
          <option value="">Seleccionar categoria</option>
          <option value="Deportivo">Deportivo</option>
          <option value="Sedan">Sedan</option>
          <option value="Pick up">Pick up</option>
         </select>
        </label>
        <label className="">
          puertas:
          <input
            type="number"
            name="puertas"
            value={caracteristicas.puertas}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          largo:
          <input
            type="number"
            name="largo"
            value={caracteristicas.largo}
            onChange={handleInputChange}
            className="w-full -2 py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
            alto:
          <input
            type="number"
            name="alto"
            value={caracteristicas.alto}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          peso:
          <input
            type="number"
            name="peso"
            value={caracteristicas.peso}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          capacidad del tanque:
          <input
            type="number"
            name="capacidad_del_tanque"
            value={caracteristicas.capacidad_del_tanque}
            onChange={handleInputChange}
            className="w-full -2 py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          consumo:
          <input
            type="number"
            name="consumo"
            value={caracteristicas.consumo}
            onChange={handleInputChange}
            className="w-full -2 py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          color:
          <select
            name="color"
            id="color"
            value={caracteristicas.color}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Color</option> 
            <option value="Negro">Negro</option>
            <option value="Azul">Azul</option>
            <option value="Rojo">Rojo</option>
            <option value="Gris">Gris</option>
            <option value="Cafe">Café</option>
            <option value="Blanco">Blanco</option>
            <option value="Marron">Marrón</option>
            <option value="Gris plateado">Gris plateado</option>
            <option value="Verde">Verde</option>
            <option value="Amarillo">Amarillo</option>
          </select>
        </label>
        <label className="">
          Imagen Frontal:
          <input
            type="file"
            name="imagenFrontal"
            onChange={handleFileChange}
            />
        </label>
        <label className="">
          Imagen Interior:
          <input
            type="file"
            name="imagenInterior"
            onChange={handleFileChange}
            />
        </label>
        <label className="">
          Imagen Lateral:
          <input
            type="file"
            name="imagenLateral"
            onChange={handleFileChange}
            />
        </label>
        </div>
            
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 -2 rounded hover:bg-green-600"
          >
          Agregar Auto
        </button>
      </form>
    </Modal>
  );
};

export default ModalAgregarAuto;
