"use client";

import React, { useRef } from "react";

const UploadFromDevice = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onFileUpload(reader.result); // Pass the base64 image to the parent
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center  space-y-4">
      <input
        ref={fileInputRef} 
        hidden
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="cursor-pointer bg-lime-400 text-black py-2 px-8 rounded-full"
      />
    </div>
  );
};

export default UploadFromDevice;
