import React from "react";
import Loader from "@/components/Loader";

const page = async () => {
  const clicked = "";
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-12 bg-[#1C1C1C]">
      {/* Camera Section */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="w-64 h-80 bg-gray-800 rounded-lg flex items-center justify-center relative">
          {/* Camera Perspective */}
          <div className="absolute w-full h-full border-4 border-blue-500"></div>
          {/* Middle Horizontal Lines */}
          <div className="absolute w-full h-full flex flex-col justify-center">
            <div className="w-full h-px bg-blue-500"></div>
            <div className="w-full h-px bg-blue-500 mt-6"></div>
          </div>
        </div>
      </div>
      {clicked ? (
        <div>
          <p className="text-white text-center text-xl mt-4">
            Hold On We Are Finding Best Results for You
          </p>

          {/* Progress Bar */}
          <Loader />
        </div>
      ) : (
        <button className="bg-lime-400 text-black font-bold py-2 px-6 rounded-lg">
          Capture
        </button>
      )}
      {/* Capture Button */}
    </div>
  );
};

export default page;
