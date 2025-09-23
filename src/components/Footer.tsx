import React from "react";
import StoreBtn from "./UtilityBtns/StoreBtn";
import CaptureBtn from "./UtilityBtns/CaptureBtn";
import MapBtn from "./UtilityBtns/MapBtn";

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 bg-lime-400">
      <StoreBtn />
      <CaptureBtn />
      <MapBtn />
    </div>
  );
};

export default Footer;
