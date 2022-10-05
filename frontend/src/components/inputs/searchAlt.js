import React from "react";
import { MdSearch } from "react-icons/md";

const SearchAlt = ({ bg, shadow }) => {
  return (
    <label
      className={`flex items-center gap-2 bg-${
        bg ? bg : "white"
      } rounded-md p-1 px-3 w-full ${shadow && "shadow-md"}`}
    >
      <div>
        <MdSearch color="#909CC2" size="1.5em" />
      </div>
      <input
        className="bg-transparent outline-none text-lg"
        type="text"
        placeholder="search"
      />
    </label>
  );
};

export default SearchAlt;
