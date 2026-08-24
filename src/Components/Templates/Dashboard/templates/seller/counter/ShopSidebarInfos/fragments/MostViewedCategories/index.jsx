import React from "react";
import { BsLaptop } from "react-icons/bs";
import RateCharges from "./RateCharges";
import { BiUsb } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";

const MostViewedCategories = () => {
  return (
    <div className="bg-white p-4 primary-border rounded shadow">
      <div className="flex text-xs text-zinc-500 font-bold! items-center justify-between">
        <p>پربازدید ترین دسته بندی های شما</p>
      </div>
      <div className="mt-5 text-sm *:h-15! text-zinc-600 divide-y divide-zinc-200 *:flex *:items-center *:justify-between">
        <div>
          <div className="flex items-center gap-1">
            <div className="size-10 text-xl! rounded-full flex items-center justify-center bg-blue-500 text-white">
              <BsLaptop />
            </div>
            <span className="text-xs font-bold">دسته‌بندی لپتاپ</span>
          </div>
          <RateCharges charges={3} />
        </div>

        <div>
          <div className="flex items-center gap-1">
            <div className="size-10 text-xl! rounded-full flex items-center justify-center text-white bg-emerald-600">
              <BiUsb />
            </div>
            <span className="text-xs font-bold"> لوازم جانبی</span>
          </div>
          <RateCharges charges={2} />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <div className="size-10 text-xl! rounded-full flex items-center justify-center text-white bg-yellow-500">
              <FaRobot />
            </div>
            <span className="text-xs font-bold"> ربات هوش مصنوعی سخنگو</span>
          </div>
          <RateCharges charges={1} />
        </div>
      </div>
    </div>
  );
};

export default MostViewedCategories;
