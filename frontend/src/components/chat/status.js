import React from "react";

const Status = ({ status }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`w-2 h-2 bg-${status} rounded-full`}></div>
      <p className="text-secondary text-sm status-online">{status}</p>
    </div>
  );
};

export default Status;
