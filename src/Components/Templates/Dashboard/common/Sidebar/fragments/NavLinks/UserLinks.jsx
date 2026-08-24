import React from "react";
import NavItem from "./item";
import { FaHome, FaUserEdit } from "react-icons/fa";
import { FaBell, FaMoneyBill1Wave } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";
import { BsChat } from "react-icons/bs";

const UserLinks = () => {
  return (
    <>
      <NavItem
        icon={<FaHome />}
        bgColor={"bg-sky-500"}
        iconColor={"text-sky-500"}
        href={"/dashboard/user/counter"}
        label="خانه"
      />
      <NavItem
        icon={<BiShoppingBag />}
        bgColor={"bg-green-500"}
        iconColor={"text-green-500"}
        href={"/dashboard/user/orders"}
        label="سفارشات"
      />
      <NavItem
        icon={<FaUserEdit />}
        bgColor={"bg-blue-500"}
        iconColor={"text-blue-500"}
        href={"/dashboard/user/personalization"}
        label="مشخصات کاربری"
      />
      <NavItem
        icon={<BsChat />}
        bgColor={"bg-emerald-500"}
        iconColor={"text-emerald-500"}
        href={"/dashboard/user/tickets"}
        label="تیکت ها"
      />
      <NavItem
        icon={<FaMoneyBill1Wave />}
        bgColor={"bg-violet-500"}
        iconColor={"text-violet-500"}
        href={"/dashboard/user/transactions"}
        label="تراکنش‌ها"
      />
      <NavItem
        icon={<FaBell />}
        bgColor={"bg-pink-500"}
        iconColor={"text-pink-500"}
        href={"/dashboard/user/notifications"}
        label="اعلانات"
      />
    </>
  );
};

export default UserLinks;
