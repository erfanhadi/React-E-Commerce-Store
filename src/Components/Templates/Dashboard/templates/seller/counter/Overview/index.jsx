import React from "react";
import { BsBox, BsBox2 } from "react-icons/bs";
import { CgChart } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import OverviewItem from "./Item";
import { BiChart } from "react-icons/bi";

const Overview = () => {
  return (
    <div className="grid *:flex *:items-center *:justify-between md:grid-cols-3 sm:grid-cols-2 grid-cols-1 *:h-30 gap-4 *:p-4 *:rounded *:bg-white *:shadow">
     <OverviewItem 
        bgColor={"bg-indigo-500/10"}
        textColor={"text-indigo-500"}
        label="میزان فروش این ماه"
        value={3_329}
        symbol=" عدد "
        footerLabel={"۲۴٪ افزایش نسبت به ماه قبل"}
        icon={<BiChart />}
     />
      <OverviewItem
        label={"تعداد محصولات "}
        symbol="+"
        value={12}
        bgColor={"bg-blue-500/10"}
        textColor={"text-blue-500"}
        icon={<BsBox2 />}
        footerLabel={"۴٪ افزایش نسبت به ماه قبل"}
      />
      <OverviewItem
        label={"تعداد سفارشات باز"}
        symbol=""
        value={Number(234)}
        bgColor="bg-sky-500/10"
        textColor="text-sky-500"
        icon={<FaTruckArrowRight />}
        footerLabel={"۱۵٪ درصد کاهش نسبت به ماه قبل"}
      />
      <OverviewItem
        label={"میزان درآمد (تومان)"}
        symbol="+"
        value={Number(5_958)}
        bgColor="bg-emerald-500/10"
        textColor="text-emerald-500"
        icon={<FaDollarSign />}
        footerLabel={"۱۵٪ درصد افزایش نسبت به ماه قبل"}
      />
    </div>
  );
};

export default Overview;
