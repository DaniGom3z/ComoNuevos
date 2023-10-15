import React from 'react';

type ButtonProps = {
  className?: string;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ className, text }) => {
  const handleClick = () => {
    // Coloca aquí la lógica del controlador de eventos de clic
    // Por ejemplo: console.log('Botón clicado');
  };

  return (
    <button className={className}>
      {text}
    </button>
  );
};

export default Button;
