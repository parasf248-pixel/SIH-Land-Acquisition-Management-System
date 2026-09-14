import React from "react";

const Home4 = ({ data }) => {
  return (
    <div className="relative w-lvh h-52 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex-shrink-0 rounded-md overflow-hidden shadow-md">
      
      {/* Image */}
      <img
        src={data.img}
        alt={data.mag1}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/50 to-transparent"></div>

      {/* Text */}
      <div className="absolute bottom-0 left-0 w-full  p-2 text-white">
        <h2 className="text-2xl font-bold  leading-tight">
          {data.mag1}
        </h2>

        <p className="text-lg leading-tight mt-1">
          {data.mag2}
        </p>
      </div>

    </div>
  );
};

export default Home4;