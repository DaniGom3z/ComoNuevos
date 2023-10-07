import React from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  text: string;
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string, 
  text: PropTypes.string.isRequired,
};

export default Button;
