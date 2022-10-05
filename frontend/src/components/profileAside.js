import React from "react";
import { IoPersonCircle, IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { InteractionCounter, LinkText } from "../components";
import { useMediaQuery } from "../hooks";
const ProfileAside = () => {
  const isLarge = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="bg-gray-100 rounded-md pb-4 shadow-md">
      <div className="bg-secondary rounded-t-md w-full h-16"></div>
      <div className="flex justify-center relative border-white pb-5">
        <div className="bg-gray-100 rounded-full -top-10 absolute">
          <IoPersonCircle color="#084887" size="4em" />
        </div>
      </div>
      <h2 className=" text-center font-bold text-primary text-sm xl:text-lg">
        Dwayne Sutherland
      </h2>
      <div className="flex items-center justify-center gap-2 mb-2 xl:mb-4">
        <IoLocationSharp color="#F58A07" size="1em" />
        <p className="text-accent text-sm xl:text-lg ">London</p>
      </div>
      <InteractionCounter />
      <div className="xl:mt-4 ">
        <Link to="/profile">
          <LinkText
            text="View Profile"
            center
            textSize={`${isLarge ? "md" : "xs"}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProfileAside;
