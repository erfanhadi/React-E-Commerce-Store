import React from "react";
import DataRow from "./DataRow";

const ShopRate = () => {
  return (
    <div className="bg-white p-4 primary-border rounded shadow">
      <div className="flex text-xs text-zinc-500 font-bold! items-center justify-between">
        <p>امتیاز فروشگاه</p>
        <span className="font-medium text-green-500">عالی</span>
      </div>
      <div className="mt-5 text-sm text-zinc-600 divide-y divide-zinc-200 *:flex *:items-center *:justify-between">
        <DataRow label={"تعهد ارسال"} value={"۱۰۰٪"} />
        <DataRow label={"رضایت مشتری"} value={"۱۰۰٪"} />
        <DataRow label={"میانگین زمان پاسخگویی"} value={"در لحظه"} />
      </div>
    </div>
  );
};

export default ShopRate;
