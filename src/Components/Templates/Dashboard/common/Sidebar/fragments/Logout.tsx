import clsx from "clsx";
import React from "react";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  const handleLogout = () => {
    // TODO: Implement logout functionality
  };

  return (
    <footer className="p-3 w-full">
      <button className="flex items-center gap-3 duration-150 transition-all hover:bg-zinc-100/70 p-1.5 rounded-lg relative w-full cursor-pointer">
        <span
          className={clsx(
            "w-1 absolute top-0 rounded-full opacity-50 bottom-0 my-auto -right-1 h-[80%] z-0"
          )}
        />

        <div
          className={clsx(
            "size-10 rounded-lg  flex items-center text-gray-500 justify-center text-xl relative overflow-hidden"
          )}
        >
          <span
            className={clsx(
              "size-full bg-gray-500 absolute z-0 opacity-15 inset-0"
            )}
          ></span>
          <BiLogOut />
        </div>
        <span className="text-sm text-zinc-600 ">خروج از حساب</span>
      </button>
    </footer>
  );
};

export default Logout;
