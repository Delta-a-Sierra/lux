import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { useMediaQuery } from "../hooks";
import Button from "./buttons/button";
import LinkText from "./linkText";
import Nameandlocation from "./nameandlocation";

const UserCard = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (!isDesktop) {
    return (
      <div className=" bg-gray-100 rounded-md shadow-md p-2 flex justify-between items-center gap-5 sm">
        <div className="flex items-center gap-4">
          <div>
            <IoPersonCircle color="#084887" size="3.4em" />
          </div>
          <Nameandlocation />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-2 gap-y-2 justify-center">
          <Button text="Message" color="primary" size="xs" width="5/5" />
          <Button text="Follow" color="accent" size="xs" width="5/5" />
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-100 rounded-md shadow-md pb-4">
      <div className="bg-secondary rounded-t-md h-10"></div>
      <div className="flex justify-center relative border-white pb-5">
        <div className="bg-gray-100 rounded-full -top-8 absolute">
          <IoPersonCircle color="#084887" size="3.4em" />
        </div>
      </div>
      <div className="flex flex-col p-2">
        <Nameandlocation center />
        <div className="flex flex-1 gap-x-2 justify-center mt-4 mb-4">
          <Button text="Message" color="primary" size="xs" width="2/5" />
          <Button text="Follow" color="accent" size="xs" width="2/5" />
        </div>
        <LinkText text="View Profile" textSize="sm" center />
      </div>
    </div>
  );
};

export default UserCard;
