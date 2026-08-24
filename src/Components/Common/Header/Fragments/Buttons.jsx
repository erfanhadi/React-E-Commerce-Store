import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router";

const Buttons = () => {
  return (
    <div className="flex-ic text-white! gap-3! *:rounded-md text-sm *:px-4! *:first:p-0! *:flex-center *:py-2 *:duration-150 *:hover:opacity-90">
      <Link
        to="/cart"
        className="relative border border-slate-200 rounded-lg size-10! p-0!"
      >
        <HiShoppingCart className="text-xl text-slate-700!" />
      </Link>
      <Link to="/auth/login" className="bg-[#2A2D53]">
        ورود | ثبت نام
      </Link>
      <Link to="/contact-us" className="bg-[#FF5F55]">
        تماس با ما
      </Link>
    </div>
  );
};

export default Buttons;
