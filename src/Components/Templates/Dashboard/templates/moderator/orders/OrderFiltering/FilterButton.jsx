import React from "react";
import { FiFilter } from "react-icons/fi";
import Drawer from "../../../../common/Drawer";
import FilterSearchInput from "./FilterSearchInput";

const BY_SELLER = "BY_SELLER";
const BY_ORDERID = "BY_ORDERID";
const BY_STATUS = "BY_STATUS";
const BY_PAYMENT_STATUS = "BY_PAYMENT_STATUS";

const FilterButton = () => {
  const [selected, setSelected] = React.useState(BY_ORDERID);

  return (
    <Drawer
      title="فیلتر سفارش‌ها"
      Trigger={
        <button className="size-10 text-lg rounded-md duration-300 hover:opacity-70 focus-within:ring-4 ring-zinc-500/15 ring-offset-2 bg-linear-to-t border primary-border shadow-sm from-zinc-100 to-zinc-50 flex items-center justify-center">
          <FiFilter />
        </button>
      }
    >
      <p className="text-sm text-zinc-700">مرتب‌سازی بر اساس:</p>

      <div className="select-none *:cursor-pointer *:flex *:items-center *:gap-2 text-sm text-zinc-600 mt-5 space-y-3">
        <div onClick={() => setSelected(BY_SELLER)}>
          <input checked={selected == BY_SELLER} type="radio" name="filterOrder" id="seller" />
          <label htmlFor="seller">بر اساس فروشنده</label>
        </div>
        <div onClick={() => setSelected(BY_ORDERID)}>
          <input checked={selected == BY_ORDERID} type="radio" name="filterOrder" id="orderId" />
          <label htmlFor="orderId">بر اساس شماره‌ سفارش</label>
        </div>
        <div onClick={() => setSelected(BY_STATUS)}>
          <input checked={selected == BY_STATUS} type="radio" name="filterOrder" id="orderStatus" />
          <label htmlFor="orderStatus">بر اساس وضعیت سفارش</label>
        </div>
        <div onClick={() => setSelected(BY_PAYMENT_STATUS)}>
          <input checked={selected == BY_PAYMENT_STATUS} type="radio" name="filterOrder" id="paymentStatus" />
          <label htmlFor="paymentStatus">بر اساس وضعیت پرداخت</label>
        </div>

        <div className="mt-10">
          <FilterSearchInput active={selected}/>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterButton;
