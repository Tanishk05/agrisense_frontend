import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import LogoutBtn from "@/components/AuthBtns/LogoutBtn";

const profile = async () => {
  const session = await auth();

  // Show loading state while session is being fetched
  return (
    <div className="w-screen h-screen bg-[#1C1C1C] flex flex-col justify-between">
      {/* Greeting */}
      <div className="p-4 text-lime-400 text-xl font-bold">
        Hi {session?.user?.name || "User"}!
      </div>

      {/* Scrollable Menu Section */}
      <div className="flex-1 overflow-y-auto p-4 relative">
        <div className="flex flex-col gap-4">
          {/* Buttons with same UI */}
          <Link href={"/history"}>
          <button className="w-full bg-lime-400 text-black py-4 rounded-lg text-lg font-bold">
            History Scanning
          </button>
          </Link>
          <Link href={"/receipts"}>
          <button className="w-full bg-lime-400 text-black py-4 rounded-lg text-lg font-bold">
            Receipts
          </button>
          </Link>
          <Link href="https://agrisense-map.onrender.com" className="">
            <button className="w-full bg-lime-400 text-black py-4 rounded-lg text-lg font-bold">
              Map Location
            </button>
          </Link>
          <LogoutBtn/>
        </div>

        {/* Scrollbar */}
        <div className="absolute top-0 right-0 h-full w-2 bg-gray-900 rounded-full">
          <div className="h-16 w-full bg-lime-400 rounded-full"></div>
        </div>
      </div>

      {/* Fixed Complain Button */}
      <div className="w-full p-4 bg-black">
        <button className="w-full bg-lime-400 text-black py-4 rounded-lg text-lg font-bold">
          Complain
        </button>
      </div>
    </div>
  );
};

export default profile;
