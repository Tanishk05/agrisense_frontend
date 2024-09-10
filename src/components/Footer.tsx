import React from "react";
import Image from "next/image";
import StoreBtn from "./UtilityBtns/StoreBtn";

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 bg-lime-400">
      <StoreBtn/>
      <div className="bg-black text-lime-400 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold">
        +
      </div>
      <Image
        src="https://cdn3d.iconscout.com/3d/premium/thumb/green-electricity-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--eco-bulb-energy-renewable-ecology-pack-nature-illustrations-3105188.png"
        alt="Info"
        className="h-8 w-8"
        height={500}
        width={500}
      />
    </div>
  );
};

export default Footer;
