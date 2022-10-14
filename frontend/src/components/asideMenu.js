import React from "react";
import { HiUser, HiBell, HiChatAlt, HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks";
import AsideItem from "./asideItem";
import { useTheme } from "../contexts/theme";
import { colors } from "../util";
//TODO refactor name to be more fitting of a nav menu

const AsideMenu = ({ size, justify }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const {
    state: { dark },
  } = useTheme();



  return (
    <div
      className={`bg-gray-100 dark:bg-dark-500 rounded-md text-primary font-bold text-md flex ${justify ? `justify-${justify}` : "justify-center"
        } 2xl:flex-col 2xl:text-xl tracking-wide px-8 py-4 shadow-md gap-4`}
    >
      <Link to="/home">
        <AsideItem text="Home">
          <HiHome
            color={dark ? colors.gray[300] : colors.primary}
            size={`${isDesktop ? size || "1.5em" : size || "2em"}`}
          />
        </AsideItem>
      </Link>
      <AsideItem alert text="Notifications">
        <div >
          <HiBell
            color={dark ? colors.gray[300] : colors.primary}
            size={`${isDesktop ? size || "1.5em" : size || "2em"}`}
          />
        </div>
      </AsideItem>
      <AsideItem alert text="Messages">
        <div > <HiChatAlt
          color={dark ? colors.gray[300] : colors.primary}
          size={`${isDesktop ? size || "1.5em" : size || "2em"}`}
        />
        </div>
      </AsideItem>
      <Link to="/profile">
        <AsideItem text="Profile">
          <HiUser
            color={dark ? colors.gray[300] : colors.primary}
            size={`${isDesktop ? size || "1.5em" : size || "2em"}`}
          />
        </AsideItem>
      </Link>
    </div>
  );
};

export default AsideMenu;
