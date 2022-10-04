import React from "react";
import { HiUser, HiBell, HiChatAlt, HiHome } from "react-icons/hi";
import { useMediaQuery } from "../hooks";

//TODO fix reponsive sizing between lg and xl breakpoints

const AsideMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <div className="bg-gray-100 rounded-md text-primary font-bold text-md  2xl:text-xl grid tracking-wide grid-cols-3 grid-rows-3 px-2 py-4 shadow-md gap-y-4 2xl:gap-y-2">
      <div className="col-span-3 m-auto xl:ml-auto 2xl:col-span-1">
        <HiHome color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
      </div>
      <h3 className="xl:col-span-2 mr-auto hidden 2xl:inline-block">Home</h3>
      <div className="col-span-3 m-auto xl:ml-auto 2xl:col-span-1 alert">
        <HiBell color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
      </div>
      <h3 className="xl:col-span-2 mr-auto hidden 2xl:inline-block">
        Notifications
      </h3>
      <div className="col-span-3 m-auto xl:ml-auto 2xl:col-span-1 alert">
        <HiChatAlt color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
      </div>
      <div className="xl:col-span-2 mr-auto hidden 2xl:inline-block">
        <h3>Messages</h3>
      </div>
      <div className="col-span-3 m-auto xl:ml-auto 2xl:col-span-1">
        <HiUser color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
      </div>
      <div className="xl:col-span-2 mr-auto hidden 2xl:inline-block">
        <h3>Friends</h3>
      </div>
    </div>
  );
};

export default AsideMenu;
