import React, { useEffect } from "react";
import { useTheme } from "../contexts/theme";

const AsideItem = ({ children, text, alert }) => {

  const {
    state: { dark },
  } = useTheme()

  return (
    <div className={`flex items-center gap-4 ${alert && (dark ? "alert-dark" : "alert")}`}>
      <div>{children}</div>
      <h3 className="hidden 2xl:inline-block">{text}</h3>
    </div>
  );
};

export default AsideItem;
