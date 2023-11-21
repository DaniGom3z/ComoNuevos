import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
const ModalEditar = ({isOpen, onClose, carro}) => {
  
  const [valoresActualizados, setValoresActualizados] =useState({
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
})

    const handleInputChange=async(e)=>{
          const {name, value}=e.target
          setValoresActualizados({...valoresActualizados, [name]:value})
    }
    const handleFileChange = (e) => {
      const { name, files } = e.target;
      setValoresActualizados({ ...valoresActualizados, [name]: files[0] });
    };

    const fechtData =async()=>{
      try{
        const token=localStorage.getItem('token')
        const response =await axios.get(`http://localhost:9000/auto/${carro.id_auto}`,{
          headers:{
            Authorization: token
          },
        });
        console.log("respuesta exitosa", response.data)
        setValoresActualizados(response.data)
      }catch(error){
          console.error('Error', error)
        
      }
    }

    const handleSubmit =async(e)=>{
       e.preventDefault();
        
       const camposObligatorios = [
        'nombre', 'precio', 'motor', 'cilindrada', 'potencia', 'torque',
        'cilindros', 'valvulas', 'alimentacion', 'traccion', 'transmicion',
        'velocidad_maxima', 'velocidades', 'tipo', 'puertas', 'largo',
        'alto', 'peso', 'capacidad_del_tanque', 'consumo', 'color',
        'imagenFrontal', 'imagenInterior', 'imagenLateral'
      ];
    
      for (const campo of camposObligatorios) {
        if (!valoresActualizados[campo]) {
          alert(`El campo ${campo} es obligatorio.`);
          return;
        }
      }
      
      const token=localStorage.getItem('token')
            try{
               const formData = new FormData();

               formData.append('nombre', valoresActualizados.nombre)
               formData.append('precio', valoresActualizados.precio)
               formData.append('motor', valoresActualizados.motor)
               formData.append('cilindrada', valoresActualizados.cilindrada)
               formData.append('potencia', valoresActualizados.potencia)
               formData.append('torque', valoresActualizados.torque)
               formData.append('cilindros', valoresActualizados.cilindros)
               formData.append('valvulas', valoresActualizados.valvulas)
               formData.append('alimentacion', valoresActualizados.alimentacion)
               formData.append('traccion', valoresActualizados.traccion)
               formData.append('transmicion', valoresActualizados.transmicion)
               formData.append('velocidad_maxima', valoresActualizados.velocidad_maxima)
               formData.append('velocidades', valoresActualizados.velocidades)
               formData.append('tipo', valoresActualizados.tipo)
               formData.append('puertas', valoresActualizados.puertas)
               formData.append('largo', valoresActualizados.largo)
               formData.append('alto', valoresActualizados.alto)
               formData.append('peso', valoresActualizados.peso)
               formData.append('capacidad_del_tanque', valoresActualizados.capacidad_del_tanque)
               formData.append('consumo', valoresActualizados.consumo)
               formData.append('color',valoresActualizados.color)

               
               const response =await axios.put(`http://localhost:9000/autos/${carro.id_auto}`, formData,{
                headers:{
                  Authorization: token
                },
               });

               console.log("respuesta exitosa", response.data)
               alert("auto editado correctamente")
                //
            }catch(error){
              console.error('error al agregar auto', error)
              alert("error al agregar auto")
              if (error.response) {
                console.error('Respuesta del servidor:', error.response.data);
              }
            }
            onClose()
    }
    useEffect(()=>{
      fechtData()
    },[])

    return (
      <>
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Modal para agregar auto"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 overflow-auto -translate-y-1/2 bg-white p-8 rounded-md shadow-md"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
        <h2 className="text-2xl -2 text-center">Editar auto</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-2 gap-2">
      <div className="w-full md:w-1/2 pt">
        <label>
          nombre:
          <input
            type="text"
            name="nombre"
            value={valoresActualizados.nombre}
            onChange={handleInputChange}
            className="w-full py-1 border border-gray-300 rounded"
            />
        </label>
        <label >
          precio:
          <input
            type="number"
            name="precio"
            value={valoresActualizados.precio}
            onChange={handleInputChange}
            className="w-full py-1 border border-gray-300 rounded"
            />
        </label>
        <label>
          Motor:
          <select
            name="motor"
            id="motor"
            value={valoresActualizados.motor}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">seleccionar Motor</option>
            <option value="v10">v10</option>
            <option value="v6 Turboalimentado">v6 Turboalimentado</option>
            <option value="Turboalimenatado TSI">Turboalimentado TSI</option>
            <option value="Turboalimentado de 4 cilindros en linea">Turboalimentado de 4 cilindros en linea</option>
            <option value="v6">v6</option>
            <option value="v8">v8</option>
            <option value="4 cilindros en linea">4 cilindros en linea</option>
            <option value="v8 sobrealimentado">v8 sobrealimentado</option>
          </select>
        </label>
        <label className="">
          cilindrada:
          <input
            type="text"
            name="cilindrada"
            value={valoresActualizados.cilindrada}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          potencia:
          <input
            type="text"
            name="potencia"
            value={valoresActualizados.potencia}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          torque:
          <input
            type="number"
            name="torque"
            value={valoresActualizados.torque}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          cilindros:
          <input
            type="text"
            name="cilindros"
            value={valoresActualizados.cilindros}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          valvulas:
          <input
            type="number"
            name="valvulas"
            value={valoresActualizados.valvulas}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          alimentacion:
          <select
            name="alimentacion"
            id="alimentacion"
            value={valoresActualizados.alimentacion}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Alimentacion</option>
            <option value="Inyeccion directa de combustible">Inyeccion directa de combustible</option>
            <option value="Sobrealimentación">Sobrealimentacion</option>
            <option value="Inyeccion directa">Inyeccion directa</option>
          </select>
        </label>
        <label className="">
          traccion:
          <select
            name="traccion"
            id="traccion"
            value={valoresActualizados.traccion}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Traccion</option>
            <option value="Total">Total</option>
            <option value="Delantera">Delantera</option>
            <option value="Trasera">Trasera</option>
            <option value="Integral">Integral</option>
          </select>
        </label>
        <label className="">
          transmicion:
          <select
            name="transmicion"
            id="transmision"
            value={valoresActualizados.transmicion}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Transmisión</option> 
            <option value="Manual">Manual</option>
            <option value="Automatica">Automatica</option>
            <option value="Semiautomatica">Semiautomatica</option>
            <option value="Automatica CVT">Automatica CVT</option>
            <option value="Manual automatizada">Manual automatizada</option>
            <option value="4x4">4x4</option>
            <option value="AWD">AWD</option>
            <option value="Automatica de doble embrague">Automatica de doble embrague</option>
            <option value="Automatica de doble embregue">Automatica de doble embregue</option>
            <option value="Variable continua">Variable continua</option>
          </select>
        </label>
        <label className="">
          velocidad maxima:
          <input
            type="number"
            name="velocidad_maxima"
            value={valoresActualizados.velocidad_maxima}
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
            value={valoresActualizados.velocidades}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          tipo:
         <select 
         name="tipo" 
         id="tipo"
         value={valoresActualizados.tipo}
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
            value={valoresActualizados.puertas}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          largo:
          <input
            type="number"
            name="largo"
            value={valoresActualizados.largo}
            onChange={handleInputChange}
            className="w-full -2 py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
            alto:
          <input
            type="number"
            name="alto"
            value={valoresActualizados.alto}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          peso:
          <input
            type="number"
            name="peso"
            value={valoresActualizados.peso}
            onChange={handleInputChange}
            className="w-full  py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          capacidad del tanque:
          <input
            type="number"
            name="capacidad_del_tanque"
            value={valoresActualizados.capacidad_del_tanque}
            onChange={handleInputChange}
            className="w-full -2 py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          consumo:
          <input
            type="number"
            name="consumo"
            value={valoresActualizados.consumo}
            onChange={handleInputChange}
            className="w-full -2 py-2 border border-gray-300 rounded"
            />
        </label>
        <label className="">
          color:
          <select
            name="color"
            id="color"
            value={valoresActualizados.color}
            onChange={handleInputChange}
            className="w-full py-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Color</option> 
            <option value="Negro">Negro</option>
            <option value="Azul">Azul</option>
            <option value="Rojo">Rojo</option>
            <option value="Gris">Gris</option>
            <option value="Cafe">Cafe</option>
            <option value="Blanco">Blanco</option>
            <option value="Marron">Marron</option>
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
          className="bg-blue-500 text-white py-2 -2 rounded "
          >
          Guardar edicion
        </button>
      </form>
         
      
    
     </Modal>
    
    </>
  )
}

export default ModalEditar