import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const Nameandlocation = () => {
  return (
    <div>
      <h2 className=" text-center font-bold text-primary text-sm xl:text-lg">
        Dwayne Sutherland
      </h2>
      <div className="flex items-center justify-center gap-2 mb-2 xl:mb-4">
        <IoLocationSharp color="#F58A07" size="1em" />
        <p className="text-accent text-sm xl:text-lg ">London</p>
      </div>
    </div>
  );
};

export default Nameandlocation;
