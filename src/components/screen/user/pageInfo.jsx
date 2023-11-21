import React, { useEffect,useState } from 'react';
import Img from '../../atoms/img'
import Header from '../../oraganisms/header'
import Title from '../../atoms/title'
import Info from '../../atoms/info'
import Button from '../../atoms/button'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import fondo from '../../../img/fondo.jpg'
const PageInfo = () => {
  const { id_auto } = useParams();
  const [auto, setAuto] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/autos/${id_auto}`)
      .then(response => response.json())
      .then(data => setAuto(data))
      .catch(error => console.error("Error al obtener detalles del auto:", error));
  }, [id_auto]);
console.log(auto)
 

  return (
    <>
    <div className='min-h-screen min-w-screen overflow-auto'>
      <Header/>
    <div>
      <Img style="absolute top-0 h-full w-full" image={fondo}/>
    </div>
    <div className='flex justify-end flex-col relative  top-16 items-center bg-opacity-40 bg-slate-700 shadow-sm border-t-2 border-gray-100 border-b-2 h-3/4 '>
      <Img style=" w-1/4 relative bottom-10" image={auto.imagenFrontal}/>
      <Title styles="pt-5 text-white font-semibold w-2/4 text-center border-b-2 first-letter:text-red-500 text-2xl" text="DETALLES DEL AUTO"/>
    <div className=' flex justify-between flex-wrap text-xl font-semibold items-end text-white w-2/4 h-fit '>
      <div>
      <Info text={"Nombre: " + auto.nombre}/>
      <Info text={"Precio : $" + auto.precio}/>
      <Info text={"Motor: " + auto.motor}/>
      <Info text={"Cilindrad en cc: " + auto.cilindrada}/>
      <Info text={"Potencia : " + auto.potencia}/>
      <Info text={"Torque Nm: " + auto.torque}/>
      <Info text={"Cilindros: " + auto.cilindros}/>
      <Info text={"Valvulas: " + auto.valvulas}/>
      <Info text={"Alimentacio: " + auto.alimentacion}/>
      <Info text={"Traccion: " + auto.traccion}/>
      </div>
      <div>
      <Info text={"Transmicion: " + auto.transmicion}/>
      <Info text={"Velocidad maxima: " + auto.velocidad_maxima+"k/h"}/>
      <Info text={"Velocidades: " + auto.velocidades}/>
      <Info text={"Categoria: " + auto.tipo}/>
      <Info text={"Puertas: " + auto.puertas}/>
      <Info text={"Largo: " + auto.largo +" metros"}/>
      <Info text={"Alto: " + auto.alto +" metros"}/>
      <Info text={"Peso: " + auto.peso +" Toneladas"}/>
      <Info text={"Capacidad del tanque en Litros: " + auto.capacidad_del_tanque+"L"}/>
      <Info text={"Consumo: " + auto.consumo+" Kilometros por Litro"}/>
      <Info text={"Color: " + auto.color}/>
      </div>
    </div>
    <Link to="/form">
    <Button styles="p-5 bg-blue-500 shadow-md relativerounded" text="Agendar Cita"/>
    </Link>
    </div>
    </div>
    </>
  );
};

export default PageInfo;