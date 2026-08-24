import React from "react";
import NavItem from "./item";
import { BiDollar, BiHome } from "react-icons/bi";
import { BsBox2, BsShop } from "react-icons/bs";
import { FaChartArea, FaTruckArrowRight, FaUsers } from "react-icons/fa6";

const ModeratorLinks = () => {
  return (
    <>
      <NavItem
        bgColor={"bg-zinc-500"}
        iconColor={"text-zinc-500"}
        icon={<BiHome />}
        href={"/dashboard/moderator/counter"}
        label="پیشخوان"
      />

      <NavItem
        bgColor={"bg-yellow-500"}
        iconColor={"text-yellow-500"}
        icon={<BsBox2 />}
        href={"/dashboard/moderator/products"}
        label="محصولات"
      />
      <NavItem
        bgColor={"bg-orange-500"}
        iconColor={"text-orange-500"}
        icon={<FaTruckArrowRight />}
        href={"/dashboard/moderator/orders"}
        label="سفارشات"
      />
      <NavItem
        bgColor={"bg-blue-500"}
        iconColor={"text-blue-500"}
        icon={<BsShop />}
        href={"/dashboard/moderator/sellers"}
        label="فروشنده ها"
      />
      <NavItem
        bgColor={"bg-indigo-500"}
        iconColor={"text-indigo-500"}
        icon={<FaUsers />}
        href={"/dashboard/moderator/users"}
        label="کاربران"
      />
      <NavItem
        bgColor={"bg-emerald-500"}
        iconColor={"text-emerald-500"}
        icon={<BiDollar />}
        href={"/dashboard/moderator/sells"}
        label="فروش ها"
      />

      <NavItem
        bgColor={"bg-red-500"}
        iconColor={"text-red-500"}
        icon={<FaChartArea />}
        href={"/dashboard/moderator/sells"}
        label="آنالیز ها"
      />
    </>
  );
};

export default ModeratorLinks;
