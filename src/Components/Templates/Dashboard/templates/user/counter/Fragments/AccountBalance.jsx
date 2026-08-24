import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router";

const AccountBalance = () => {
  return (
    <div className=" text-xs primary-border px-4 h-16 rounded-xl flex items-center justify-between">
      <p className="min-w-max">
        <strong className="font-semibold">موجودی کیف‌ پول:</strong>
      </p>
      <div className="gap-3  flex items-center justify-between divide-x divide-neutral-200">
        <p className=" px-3 font-semibold">0 تومان</p>
        <Link
          className="text-blue-500 flex items-center justify-center gap-1"
          to={"/user/charge-account"}
        >
          <span>افزایش موجودی</span>
          <FaChevronLeft />
        </Link>
      </div>
    </div>
  );
};

export default AccountBalance;
