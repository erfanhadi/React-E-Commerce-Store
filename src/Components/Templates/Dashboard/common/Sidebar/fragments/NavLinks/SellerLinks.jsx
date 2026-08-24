import React from "react";
import NavItem from "./item";
import { BiBox, BiDollar, BiHome, BiMessage } from "react-icons/bi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";
import { BsBank } from "react-icons/bs";

const SellerLinks = () => {
  return (
    <>
      <NavItem
        href={"/dashboard/seller/counter"}
        label="پیشخوان"
        bgColor={"bg-blue-500"}
        icon={<BiHome />}
        iconColor={"text-blue-500"}
      />

      <NavItem
        href={"/dashboard/seller/products"}
        label="محصولات"
        bgColor={"bg-emerald-500"}
        icon={<BiBox />}
        iconColor={"text-emerald-500"}
      />
      <NavItem
        href={"/dashboard/seller/orders"}
        label="سفارشات"
        bgColor={"bg-yellow-500"}
        icon={<FaTruckArrowRight />}
        iconColor={"text-yellow-500"}
      />
      <NavItem
        href={"/dashboard/seller/income"}
        label="درآمد"
        bgColor={"bg-purple-500"}
        icon={<BiDollar />}
        iconColor={"text-purple-500"}
      />
      <NavItem
        href={"/dashboard/seller/income"}
        label="پیغام ها"
        bgColor={"bg-orange-600"}
        icon={<BiMessage />}
        iconColor={"text-orange-600"}
      />
      <NavItem
        href={"/dashboard/seller/income"}
        label="تصویه حساب و امور مالی"
        bgColor={"bg-red-800"}
        icon={<BsBank className="size-5!" />}
        iconColor={"text-red-800"}
      />
      <NavItem
        href={"/dashboard/seller/income"}
        label="تنظیمات فروشگاه"
        bgColor={"bg-sky-800"}
        icon={<MdSettings />}
        iconColor={"text-sky-800"}
      />
    </>
  );
};

export default SellerLinks;
