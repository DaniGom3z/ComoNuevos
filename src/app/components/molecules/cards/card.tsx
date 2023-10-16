import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/button';
import Title from '../../atoms/Title/title';

interface CardsProps {
  buttonText: string;
  priceText: string;
  imageSrc: string;
  name:string;
}

const Cards: React.FC<CardsProps> = ({ buttonText, priceText, imageSrc,name }) => {

  return (
    <div className='bg-neutral-300 w-64 h-96 mb-6 rounded ml-10 relative mt-6 hover:scale-105 ease-in duration-200 hover:rounded-none'>
      <img src={imageSrc} alt={priceText} className='w-64 h-48 object-cover rounded-t ' />
      <div className="p-3">
      <Title name={name} className='text-black text-3xl font-bold'/>
        <Title name={priceText} className='text-black text-2xl'/>
      </div>
      <div className='float-right mt-10 mr-5'>
        <a href="../../../pages/Information"><Button text={buttonText} className='bg-red-500 w-20 h-10 rounded hover:bg-red-700'/> </a>
      
      </div>
    </div>
  );
};

Cards.propTypes = {
  buttonText: PropTypes.string.isRequired,
  priceText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Cards;
