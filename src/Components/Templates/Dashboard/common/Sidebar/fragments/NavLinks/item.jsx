import clsx from "clsx";
import React from "react";
import { Link, NavLink } from "react-router";

const NavItem = ({ label = "", href, icon, bgColor, iconColor }) => {
  return (
    <NavLink
      to={href}
      end
      className={
        "flex items-center gap-3 duration-150 transition-all hover:bg-zinc-100/70 p-1.5 rounded-lg relative"
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <>
              <div
                className={clsx(
                  "absolute size-full right-0 opacity-6 rounded-lg  ",
                  bgColor
                )}
              ></div>
              <span
                className={clsx(
                  "w-1 absolute top-0 rounded-full opacity-50 bottom-0 my-auto -right-1 h-[80%] z-0",
                  bgColor
                )}
              />
            </>
          )}

          <div
            className={clsx(
              "size-10 rounded-lg flex items-center justify-center text-xl relative overflow-hidden",
              iconColor
            )}
          >
            <span
              className={clsx(
                "size-full absolute z-0 opacity-15 inset-0",
                bgColor
              )}
            ></span>
            {icon}
          </div>
          <span className="text-sm text-zinc-600 ">{label}</span>
        </>
      )}
    </NavLink>
  );
};

export default NavItem;
