import React from 'react';
import Cards from '../../molecules/cards/card'; // Ajusta la ruta según la ubicación de tus componentes Cards

function CardOrganism() {
  const cardsData = [
    {
      buttonText: 'Ver',
      priceText: '$19.99',
      imageSrc: '/auto2.jpg',
      name:'ford',
    },
    {
      buttonText: 'Ver',
      priceText: '$29.99',
      imageSrc: '/auto4.jpg',
      name:'raptor',
    },
    {
      buttonText: 'Ver',
      priceText: '$39.99',
      imageSrc: '/Auto.jpg',
      name:'bmw',
    },
    {
        buttonText: 'Ver',
        priceText: '$19.99',
        imageSrc: '/auto2.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$29.99',
        imageSrc: '/auto4.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$39.99',
        imageSrc: '/Auto.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$19.99',
        imageSrc: '/auto2.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$29.99',
        imageSrc: '/auto4.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$39.99',
        imageSrc: '/Auto.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$19.99',
        imageSrc: '/auto2.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$29.99',
        imageSrc: '/auto4.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$39.99',
        imageSrc: '/Auto.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$19.99',
        imageSrc: '/auto2.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$29.99',
        imageSrc: '/auto4.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$39.99',
        imageSrc: '/Auto.jpg',
        name:'ford',
      },
      {
        buttonText: 'Ver',
        priceText: '$19.99',
        imageSrc: '/auto2.jpg',
        name:'ford',
      },
  ];

  return (
    <div className="flex flex-wrap bg-white pl-10">
      {cardsData.map((card, index) => (
        <Cards
          key={index}
          buttonText={card.buttonText}
          priceText={card.priceText}
          imageSrc={card.imageSrc}
          name={card.name}
        />
      ))}
    </div>
  );
}

export default CardOrganism;
