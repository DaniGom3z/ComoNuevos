import React from 'react';


function Banner() {
  return (
    <div className="relative h-[80vh] w-full">
      <div
        style={{
          backgroundImage: 'url("/Inicio.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
        }}
        className="z-0"
      ></div>
    </div>
  );
}


export default Banner;
