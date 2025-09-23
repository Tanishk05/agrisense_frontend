import React from "react";
import { auth } from "@/auth";
import AuthBtn from "./AuthBtns/AuthBtn";
import Image from "next/image";
import ProfileBtn from "./UtilityBtns/ProfileBtn"

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="w-full flex justify-between items-center p-4 bg-lime-400">
      <h1 className="text-black text-xl font-bold">AgriSense AI</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
          <Image
            src="https://imgs.search.brave.com/h5AqXCHnSgNH891f2L1H6WGCE4L4NZEMjf4ZW38nGqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTA0NzMvMTA0/NzMzODUucG5n"
            alt="Notifications"
            className="h-6 w-6"
            height={500}
            width={500}
          />
        </div>
        {session ? (
          <ProfileBtn />
        ) : (
          <AuthBtn />
        )}
      </div>
    </div>
  );
};

export default Navbar;
