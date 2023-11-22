import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className='w-10 h-10 p-1 shadow-md rounded-full bg-blue-200'
    />
  );
};

export default Avatar;
