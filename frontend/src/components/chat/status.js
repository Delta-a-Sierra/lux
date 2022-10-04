import React from "react";

const Status = ({ status }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`w-2.5 h-2.5 bg-${status} rounded-full`}></div>
      <p className="text-secondary text-md">{status}</p>
    </div>
  );
};

export default Status;
