import React, { useState, useEffect } from "react";
import Header from "../oraganisms/header";
import Banner from "../oraganisms/banner";
import Img4 from "../../img/deportivo.jpg";
import Cards from "../oraganisms/cards";
import { BarLoader } from "react-spinners";
import axios from "axios";
const ThirdPage = () => {
  const [carro, setCarro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2; 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/autos?tipo=deportivo",
          {
            params: {
              page: currentPage,
              pageSize,
            },
          }
        );

        const data = await response.data;
        if (data.length === 0) {
          setError("no tenemos autos disponibles");
          setLoading(false);
          return;
        }
        const autosNoEliminados = data.filter(
          (carro) => carro.eliminada_logicamente === 0
        );
        setCarro(autosNoEliminados);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de autos:", error.message);
        setError("Hubo un problema al cargar los datos.");
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, pageSize]);

  return (
    <>
      <div className='fixed flex justify-center z-20 w-full'>
         <Header />  
         <span className='absolute -bottom-0.5 bg-red-500 w-3/4 h-0.5'></span>
         </div>
      <div className="position relative -top-20 banner">
        <Banner style=" img absolute" image={Img4} />
        <div className="image-overlay"></div>
      </div>
      <div className="relative -top-64 z-10">
        {error ? (
          <p className="w-full text-center font-semibold text-red-500">
            {error}
          </p>
        ) : carro ? (
          <Cards
            carro={carro}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        ) : (
          <div className="w-full flex justify-center">
            <BarLoader
              color="#3498db"
              loading={loading}
              height={8}
              width={200}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ThirdPage;
