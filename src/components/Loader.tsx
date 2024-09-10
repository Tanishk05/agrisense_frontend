import React from "react";

const Loader = () => {
  return (
    <div className="w-[80%] bg-zinc-700 relative mt-[26%] ml-[10%] h-[20px] rounded-xl">
      <div className="small_piece absolute top-0 left-0 control w-[25%] h-[100%] bg-[#BFFE3A] rounded-xl"></div>
    </div>
  );
};

export default Loader;
