import React from "react";
import { IoPersonCircle, IoLocationSharp } from "react-icons/io5";
import Button from "./buttons/button";
import LinkText from "./linkText";
import Nameandlocation from "./nameandlocation";

const User = () => {
  return (
    <div className=" bg-gray-100 rounded-md shadow-md pb-4">
      <div className="bg-secondary rounded-t-md h-10"></div>
      <div className="flex justify-center relative border-white pb-5">
        <div className="bg-gray-100 rounded-full -top-8 absolute">
          <IoPersonCircle color="#084887" size="3.4em" />
        </div>
      </div>
      <div className="flex flex-col p-2">
        <Nameandlocation />
        <div className="flex gap-x-2 justify-center mt-4 mb-4">
          <Button text="Message" color="primary" size="xs" width="2/5" />
          <Button text="Follow" color="accent" size="xs" width="2/5" />
        </div>
        <LinkText text="View Profile" textSize="sm" center />
      </div>
    </div>
  );
};

export default User;
