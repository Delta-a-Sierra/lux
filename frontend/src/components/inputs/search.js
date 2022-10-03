import React from "react";
import { MdSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <label className="flex items-center gap-2 bg-white rounded-full p-1 px-3 w-full">
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

export default SearchInput;
