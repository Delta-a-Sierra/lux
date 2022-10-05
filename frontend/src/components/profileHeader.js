import React from "react";
import { IoPersonCircle, IoLocationSharp } from "react-icons/io5";
import { useMediaQuery } from "../hooks";
import Tab from "./tab";

const ProfileHeader = ({ activePage, setActivePage }) => {
  const isDesktop = useMediaQuery("(min-width: 1536px)");

  return (
    <div className="bg-gray-100 shadow-md rounded-md border-t-8 border-primary pt-8">
      <div className="flex justify-center items-center gap-4">
        <IoPersonCircle color="#084887" size={isDesktop ? "6em" : "4em"} />
        <div>
          <h1 className="text-primary font-bold text-xl xl:text-2xl">
            Dwayne Sutherland
          </h1>
          <div className="flex items-center gap-2 mb-2 xl:mb-4">
            <IoLocationSharp
              color="#F58A07"
              size={isDesktop ? "2em" : "1.5em"}
            />
            <p className="text-accent text-xl  xl:text-2xl">London</p>
          </div>
        </div>
      </div>
      <div className="mt-2 sm:mt-8 sm:gap-x-4 flex justify-evenly sm:justify-center">
        <Tab
          title="Posts"
          active={activePage === "posts" ? true : false}
          onClick={setActivePage}
        />
        <Tab
          title="Following"
          active={activePage === "following" ? true : false}
          onClick={setActivePage}
        />
        <Tab
          title="Followers"
          active={activePage === "followers" ? true : false}
          onClick={setActivePage}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
