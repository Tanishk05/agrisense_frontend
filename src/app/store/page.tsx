import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center bg-gray-700 rounded-lg px-4 py-2">
          <Image
            src="https://imgs.search.brave.com/hNoxaZVgU7yvSL0VaoEKNh9BWIDaqBWRIv5Lalp0cbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGFlMWNiMTFi/MjI3NDkxYzMzOTMu/cG5n"
            alt="Search"
            className="h-6 w-6 mr-2"
            height={500}
            width={500}
          />
          <input
            type="text"
            placeholder="Search any medicine"
            className="bg-gray-700 text-white w-full focus:outline-none"
          />
        </div>
      </div>

      {/* Store Section */}
      <div className="p-4 flex-grow overflow-y-scroll scrollbar-thin scrollbar-thumb-lime-400 scrollbar-track-gray-800">
        <div className="grid grid-cols-2 gap-4">
          {/* Store Items */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-zinc-800 text-white p-4 rounded-lg">
              <Image
                src="https://5.imimg.com/data5/SELLER/Default/2022/7/HG/FS/CF/112814440/jeevan-concentrated-plant-medicine-500x500.jpg"
                alt="Medicine"
                className="w-full h-32 object-cover rounded-lg"
                height={500}
                width={500}
              />
              <p className="text-lime-400 font-bold mt-2">rs . 244</p>
              <p className="text-gray-400 text-sm">1Kg</p>
              <p className="text-white font-bold mt-1">Pendrophill</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
