import React from "react";
import { locateImagePath } from "../../../../../../../lib/helpers";

const QuickOverview = () => {
  return (
    <div className="p-6 rounded-xl border border-zinc-200">
      <h3 className="font-bold text-zinc-700">بررسی کلی سفارشات</h3>

      <div className="mt-6 *:flex *:items-center text-xs! *:gap-5 divide-x grid grid-cols-3 gap-5 *:px-6 divide-zinc-200">
        <div>
          <img
            src={locateImagePath("on-going-order.png")}
            className="size-12"
            alt=""
          />
          <div className="space-y-1">
            <p className="font-bold">7 سفارش</p>
            <p className="text-zinc-500">در حال پردازش</p>
          </div>
        </div>
        <div>
          <img
            src={locateImagePath("completed-order.png")}
            className="size-12"
            alt=""
          />
          <div className="space-y-1">
            <p className="font-bold">7 سفارش</p>
            <p className="text-zinc-500">تکمیل شده</p>
          </div>
        </div>
        <div>
          <img
            src={locateImagePath("returned.png")}
            className="size-12"
            alt=""
          />
          <div className="space-y-1">
            <p className="font-bold">7 سفارش</p>
            <p className="text-zinc-500">مرجوع شده</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickOverview;
