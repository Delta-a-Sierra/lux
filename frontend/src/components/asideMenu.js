import React from "react";
import { HiUser, HiBell, HiChatAlt, HiHome } from "react-icons/hi";
import { useMediaQuery } from "../hooks";

//TODO fix reponsive sizing between lg and xl breakpoints

const AsideMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <div className="bg-gray-100 rounded-md text-primary font-bold text-md  2xl:text-xl grid tracking-wide grid-cols-4 lg:grid-cols-3 grid-row-1 lg:grid-rows-3 px-2 py-4 shadow-md gap-y-4 2xl:gap-y-2">
      <div className="col-span-1 m-auto xl:ml-auto lg:col-span-1">
        <HiHome color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
      </div>
      <h3 className="lg:col-span-2 mr-auto hidden lg:inline-block">Home</h3>
      <div className="col-span-1 m-auto xl:ml-auto lg:col-span-1 alert">
        <HiBell color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
      </div>
      <h3 className="lg:col-span-2 mr-auto hidden lg:inline-block">
        Notifications
      </h3>
      <div className="col-span-1 m-auto xl:ml-auto lg:col-span-1 alert">
        <HiChatAlt color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
      </div>
      <div className="lg:col-span-2 mr-auto hidden lg:inline-block">
        <h3>Messages</h3>
      </div>
      <div className="col-span-1 m-auto xl:ml-auto lg:col-span-1">
        <HiUser color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
      </div>
      <div className="lg:col-span-2 mr-auto hidden lg:inline-block">
        <h3>Friends</h3>
      </div>
    </div>
  );
};

export default AsideMenu;
