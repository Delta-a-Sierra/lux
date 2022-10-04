import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import Status from "./status";

const NameAndStatus = ({ name, status }) => {
  return (
    <div className="flex gap-2 items-center">
      <IoPersonCircle color="#084887" size="1.5em" />
      <div className="w-9/12">
        <h3 className="text-primary text-sm font-bold whitespace-nowrap max-w-full overflow-hidden overflow-ellipsis">
          {name}
        </h3>
        <Status status={status} />
      </div>
    </div>
  );
};

export default NameAndStatus;
