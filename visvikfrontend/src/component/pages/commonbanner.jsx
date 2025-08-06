import React from "react";

const Banner = (props) => {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-[url('./23.png')] bg-cover bg-center opacity-70"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {props.title}
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto drop-shadow-md">
            {props.details}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </div>
  );
};

export default Banner;
