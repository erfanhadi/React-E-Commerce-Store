import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { MdShoppingBag, MdVerified } from "react-icons/md";

const Variants = () => {
  return (
    <div className="space-y-5 *:flex-ic *:gap-3 text-slate-600 select-none">
      <div>
        <MdVerified className="text-2xl" />
        <p className="text-sm font-medium">
          36 ماه گارانتی الماس رایان ایرانیان
        </p>
      </div>
      <div>
        <MdShoppingBag className="text-2xl" />
        <p className="text-sm font-medium">فروشگاه اینترنتی شاپینو</p>
      </div>
      <div>
        <FaTruckFast className="text-2xl" />
        <p className="text-sm font-medium">ارسال فوری</p>
      </div>
    </div>
  );
};

export default Variants;
