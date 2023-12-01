import React from 'react'
import { Carousel } from "@material-tailwind/react";
export function CarouselDefault({imagenFrontal,imagenLateral,imagenInterior}) {
    return (
      <Carousel className="rounded-xl w-1/3 h-80 ">
        <img
          src={imagenFrontal}
          alt="image 1"
          className="h-full w-full object-cover"
          />
        <img
          src={imagenInterior}
          alt="image 2"
          className="h-full w-full object-cover"
          />
        <img
          src={imagenLateral}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    );
  }