import React from "react";

const AsideItem = ({ children, text }) => {
  return (
    <div className="flex items-center gap-4">
      <div>{children}</div>
      <h3 className="hidden 2xl:inline-block">{text}</h3>
    </div>
  );
};

export default AsideItem;
