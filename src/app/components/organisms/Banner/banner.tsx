import React from 'react';

interface BannerProps {
  url: string;
}

function Banner({ url }:BannerProps) {
  return (
    <div className="relative h-[60vh] w-full">
      <div
        style={{
          backgroundImage: `url("${url}")`,
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
