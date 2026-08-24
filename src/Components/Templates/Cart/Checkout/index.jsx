import React from "react";

const Checkout = () => {
  return (
    <div className="col-span-3 space-y-4 sticky top-4 max-h-max">
      <p className="text-lg font-bold text-slate-700">
        <strong> صورتحساب</strong>
      </p>
      <div className="p-5 border *:flex-between *:grow rounded-lg border-slate-200 space-y-4">
        <div>
          <p className="font-bold text-slate-600 text-sm">قیمت محصولات</p>
          <p className="font-medium flex-ic gap-1 text-sm ">
            {Number(15_000_000).toLocaleString("fa-IR")}
            <span className="text-sm">تومان</span>
          </p>
        </div>
        <div>
          <p className="font-bold  text-xs text-blue-500!">
            مالیات برافزوده {"(9%)"}
          </p>
          <p className="font-medium flex-ic gap-1 text-xs text-blue-500! ">
            {Number(297_500).toLocaleString("fa-IR")}
            <span className="text-sm">تومان</span>
          </p>
        </div>
        <div className="w-full h-px border border-slate-100" />
        <div className="text-slate-800!">
          <p className="font-bold  text-sm">قیمت محصولات</p>
          <p className="flex-ic gap-1 text-lg font-black! ">
            <strong>{Number(15_297_500).toLocaleString("fa-IR")}</strong>
            <span className="text-sm ">تومان</span>
          </p>
        </div>
        <div>
          <button className="h-11 focus-within:ring-4! ring-blue-500/40! text-center bg-blue-600 text-white text-sm font-bold w-full">
            تکمیل سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
