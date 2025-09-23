import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <h1>Buy from the trusted sources: </h1>
      <ul className="flex flex-col gap-4">
        <li className="bg-green-400 text-center py-4 px-2 rounded-lg text-black font-bold my-4">
          <Link href={"https://www.ugaoo.com/"}>
            Ugaoo
          </Link>
        </li>
        <li className="bg-green-400 text-center py-4 px-2 rounded-lg text-black font-bold my-4">
          <Link href={"https://nurserylive.com/"}>
            NurseryLive
          </Link>
        </li>
        <li className="bg-green-400 text-center py-4 px-2 rounded-lg text-black font-bold my-4">
          <Link href={"https://gachwala.in/"}>
            Gachwala
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
