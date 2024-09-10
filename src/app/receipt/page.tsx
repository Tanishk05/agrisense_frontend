import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <p className="text-white text-xl">
          Hii !<b> Shreyank</b>
        </p>
        <button className="bg-lime-400 text-black py-2 px-6 rounded-lg text-lg font-bold">
          Download
        </button>
      </div>
      <div className=" overflow-y-scroll w-[100%] h-[80vh] p-2 ">
        <div className="flex justify-center">
          <Image
            src="https://imgs.search.brave.com/-tZoUAioWsu9VwON5gAXgsnANuRc5bDyteBedw6vC98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/ODU0Mzg3L3Bob3Rv/L3doaXRlZmx5Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Q/Q3JIQThSRy1VaTFy/OU8wV09kb3JNNW1v/elN2dndaaHZOVlAx/TnJmNENrPQ"
            alt="Plant with Disease"
            className="w-64 h-64 object-cover rounded-lg"
            height={500}
            width={500}
          />
        </div>
        <div className="result_text text-center text-white p-4">
          <p className="text-xl">
            Condition is{" "}
            <span className="text-red-500 font-bold">not Safe</span>
          </p>
          <p className="text-xl">
            Disease is{" "}
            <span className="text-yellow-400 font-bold">Parelotamesia</span>
          </p>
        </div>
        <div className="bg-zinc-800 text-white p-4 rounded-lg space-y-2">
          <p className="text-red-500 font-bold">Cause</p>
          <p>- Earth Worm, insects etc.</p>

          <p className="text-green-400 font-bold">Home Remedie :</p>
          <ul className="list-disc ml-4">
            <li>wash plants</li>
            <li>use sulphur [alum]</li>
            <li>use salt water</li>
          </ul>

          <p className="text-yellow-400 font-bold">Expert Remedie :</p>
          <p>Use MistenG Solution</p>
          <p>Use MistenG Solution</p>
          <p>Use MistenG Solution</p>
          <p>Use MistenG Solution</p>
          <p>Use MistenG Solution</p>
          <p>Use MistenG Solution</p>
          <p>Use MistenG Solution</p>
        </div>
      </div>
    </div>
  );
};

export default page;
