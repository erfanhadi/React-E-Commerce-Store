import React from "react";
import { Link } from "react-router";
import Buttons from "./Fragments/Buttons";
import { TbBooks, TbHome, TbInfoCircle, TbPhoneCall } from "react-icons/tb";

const Header = () => {
  return (
    <header className=" bg-white border-b border-slate-200  w-full! h-15">
      <nav className="flex-between **:flex-ic **:gap-1 :gap-3! container h-full">
        <div className="text-slate-800 font-medium! gap-4!">
          <Link to="/">
            <TbHome />
            خانه
          </Link>
          <div className="w-px h-4 bg-black/10" />
          <Link to="/articles">
            <TbBooks />
            <span>مقالات</span>
          </Link>
          <div className="w-px h-4 bg-black/10" />
          <Link to="/about-us">
            <TbInfoCircle />
            <span>درباره ما</span>
          </Link>
          <div className="w-px h-4 bg-black/10" />
          <Link to="/contact-us">
            <TbPhoneCall />
            <span>تماس با ما</span>
          </Link>
        </div>
        <Buttons />
      </nav>
    </header>
  );
};

export default Header;
