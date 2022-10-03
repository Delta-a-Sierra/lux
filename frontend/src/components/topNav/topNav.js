import React from "react";
import { Logo, SearchInput } from "..";
import { IoPersonCircle, IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const TopNav = () => {
  return (
    <nav className="fixed top-0 w-screen overflow-hidden bg-primary">
      <div className=" flex justify-between items-center w-full h-16 p-1 px-3 md:px-8">
        <Logo width="6" />
        <div className="flex justify-end items-center gap-2 md:m-auto w-fit">
          <div className="w-40 md:w-96">
            <SearchInput />
          </div>
          <div className="md:hidden">
            <IoMenuOutline color="white" size="2em" />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <IoPersonCircle className=" ml-auto" color="white" size="2.2em" />
          <p className="text-white text-xl">Hi Dwayne! </p>
          <IoIosArrowDown color="white" size="1.5em" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
