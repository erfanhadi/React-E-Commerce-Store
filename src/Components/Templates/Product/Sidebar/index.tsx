import React from "react";
import MiniProduct from "./Fragments/MiniProduct";
import AddToCart from "./Fragments/AddToCart";
import NoticeDescription from "./Fragments/NoticeDescription";
import Price from "./Fragments/Price";
import Counseling from "./Fragments/Counseling";

const Sidebar = () => {
  return (
    <aside className="col-span-2 w-full rounded-xl border border-neutral-200 max-h-max sticky top-5 p-5 space-y-5">
        <MiniProduct />
        <NoticeDescription />
        <Price />
        <AddToCart />
        <Counseling />
    </aside>
  );
};

export default Sidebar;
