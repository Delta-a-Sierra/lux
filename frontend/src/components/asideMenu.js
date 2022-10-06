import React from "react";
import { HiUser, HiBell, HiChatAlt, HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks";
import AsideItem from "./asideItem";

const AsideMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <div className="bg-gray-100 rounded-md text-primary font-bold text-md flex justify-center 2xl:flex-col 2xl:text-xl tracking-wide px-8 py-4 shadow-md gap-4">
      <Link to="/home">
        <AsideItem text="Home">
          <HiHome color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
        </AsideItem>
      </Link>
      <AsideItem text="Notifications">
        <div className="alert">
          <HiBell color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
        </div>
      </AsideItem>
      <AsideItem text="Messages">
        <div className="alert">
          <HiChatAlt color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
        </div>
      </AsideItem>
      <Link to="/profile">
        <AsideItem text="Profile">
          <HiUser color="#084887" size={`${isDesktop ? "1.5em" : "2em"}`} />
        </AsideItem>
      </Link>
    </div>
  );
};

export default AsideMenu;
