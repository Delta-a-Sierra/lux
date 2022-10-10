import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/theme";
import { colors } from "../util";

//TODO add fade between icons

const ThemeIcon = ({ size, color }) => {
  const {
    state: { dark },
    dispatch,
  } = useTheme();
  if (dark) {
    return (
      <div onClick={() => dispatch({ type: "toggle" })}>
        <FaSun
          size={size ? size : "2em"}
          color={color ? color : colors.primary}
        />
      </div>
    );
  }
  return (
    <div onClick={() => dispatch({ type: "toggle" })}>
      <FaMoon
        size={size ? size : "2em"}
        color={color ? color : colors.primary}
      />
    </div>
  );
};

export default ThemeIcon;
