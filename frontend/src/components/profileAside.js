import React from "react";
import { IoPersonCircle, IoLocationSharp } from "react-icons/io5";

const ProfileAside = () => {
  return (
    <div className="bg-gray-100 rounded-md">
      <div className="bg-secondary rounded-t-md w-full h-16"></div>
      <div className="flex justify-center relative border-white pb-5">
        <div className="bg-gray-100 rounded-full -top-10 absolute">
          <IoPersonCircle color="#084887" size="4em" />
        </div>
      </div>
      <h2 className=" text-center font-bold text-primary text-xl">John Doe</h2>
      <div className="flex items-center justify-center gap-2">
        <IoLocationSharp color="#F58A07" size="1.5em" />
        <p className="text-accent">London</p>
      </div>
    </div>
  );
};

export default ProfileAside;
