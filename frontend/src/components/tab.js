import React from "react";

const Tab = ({ title, active, onClick }) => {
  return (
    <div
      className={`border-accent hover:bg-gray-200  ${
        active && "border-b-4"
      } px-2`}
      onClick={() => onClick(title.toLowerCase())}
    >
      <h3
        className={`text-primary font-bold text-xs sm:text-md  tracking-wider pb-1  sm:w-20 text-center ${
          !active && "opacity-70"
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default Tab;
