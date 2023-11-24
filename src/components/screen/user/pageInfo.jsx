import React, { useEffect,useState } from 'react';
import Img from '../../atoms/img'
import Header from '../../oraganisms/header'
import Title from '../../atoms/title'
import Info from '../../atoms/info'
import Button from '../../atoms/button'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import fondo from '../../../img/fondo.jpg'
import { CarouselDefault } from '../../oraganisms/carouselDeafult';
const PageInfo = () => {
  const {id_auto}=useParams()

  const [carro,setCarro]=useState(null)

  useEffect(()=>{
    const fechData =async()=>{
      try{
          const response =await axios.get(`http://localhost:9000/autos/${id_auto}`)

          setCarro(response.data)
      }catch(error){
          console.error('error', error)
          if(error.response){
            console.error("respuesta del servidr", error.response)
          }      
        }
    }
    fechData()
  },[])

  return (
    <>
    {carro &&
    <div className='min-h-screen max-h-screen min-w-screen overflow-carro'>
      <Header/>
    <div>
      <Img style="absolute top-0 h-full w-full" image={fondo}/>
    </div>
    <div className='flex justify-end flex-col relative  top-16 items-center bg-opacity-40 bg-slate-700 shadow-sm border-t-2 border-gray-100 border-b-2 h-3/4 '>
      <CarouselDefault imagenFrontal={carro.imagenFrontal} imagenLateral={carro.imagenLateral} imagenInterior={carro.imagenInterior}/>
      <Title styles="pt-5 text-white font-semibold w-2/4 text-center border-b-2 first-letter:text-red-500 text-2xl" text="DETALLES DEL AUTO"/>
    <div className=' flex justify-between flex-wrap text-xl font-semibold items-end text-white w-2/4 h-fit '>
      <div>
      <Info text={"Nombre: " + carro.nombre}/>
      <Info text={"Precio : $" + carro.precio}/>
      <Info text={"Motor: " + carro.motor}/>
      <Info text={"Cilindrad en cc: " + carro.cilindrada}/>
      <Info text={"Potencia : " + carro.potencia}/>
      <Info text={"Torque Nm: " + carro.torque}/>
      <Info text={"Cilindros: " + carro.cilindros}/>
      <Info text={"Valvulas: " + carro.valvulas}/>
      <Info text={"Alimentacio: " + carro.alimentacion}/>
      <Info text={"Traccion: " + carro.traccion}/>
      </div>
      <div>
      <Info text={"Transmicion: " + carro.transmicion}/>
      <Info text={"Velocidad maxima: " + carro.velocidad_maxima+"k/h"}/>
      <Info text={"Velocidades: " + carro.velocidades}/>
      <Info text={"Categoria: " + carro.tipo}/>
      <Info text={"Puertas: " + carro.puertas}/>
      <Info text={"Largo: " + carro.largo +" metros"}/>
      <Info text={"Alto: " + carro.alto +" metros"}/>
      <Info text={"Peso: " + carro.peso +" Toneladas"}/>
      <Info text={"Capacidad del tanque en Litros: " + carro.capacidad_del_tanque+"L"}/>
      <Info text={"Consumo: " + carro.consumo+" Kilometros por Litro"}/>
      <Info text={"Color: " + carro.color}/>
      </div>
    </div>
    <Link to="/form">
    <Button styles="p-5 bg-blue-500 shadow-md relativerounded" text="Agendar Cita"/>
    </Link>
    </div>
    </div>
}
    </>
  );
};

export default PageInfo;