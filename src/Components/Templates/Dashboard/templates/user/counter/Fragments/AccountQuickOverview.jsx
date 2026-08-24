import React from "react";
import { Link } from "react-router";
import { locateImagePath } from "../../../../../../../lib/helpers";

const AccountQuickOverview = () => {
  const cardUI = {
    base: "p-5 pb-10 primary-border max-h-max rounded-xl",
    content:
      "col-span-10 text-sm rounded-xl  relative gap-y-10 py-8 bg-zinc-100/80 p-5 grid grid-cols-3 gap-4 *:flex *:items-center *:justify-center *:gap-2 *:flex-col",
    avatar:
      "col-span-2 rounded-full relative flex size-20 primary-border items-center justify-center",
  };

  return (
    <div className={cardUI.base}>
      <div className="grow flex items-center justify-between">
        <h3 className="font-bold text-zinc-700">بررسی کلی حساب</h3>
        <Link
          className="font-medium text-blue-500 text-sm"
          to="/user/personalization"
        >
          مشاهده کامل
        </Link>
      </div>
      <div className="mt-10 grid items-center grid-cols-12">
        <div className={cardUI.avatar}>
          <img src={locateImagePath("user-icon.png")} alt="" />
          <div className="absolute right-full w-20 h-2 bg-zinc-100/80" />
        </div>

        {/* Content  */}
        <div className={cardUI.content}>
          <div>
            <p className="text-xs text-zinc-500">نام و نام‌خانوادگی</p>
            <p className="text-zinc-800">
              <strong>امین سعیدی</strong>
            </p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">شماره موبایل</p>
            <p className="text-zinc-800">
              <strong>09911871596</strong>
            </p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">دریافت خبرنامه</p>
            <p className="text-red-600">
              <strong>خیر</strong>
            </p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">کد ملی</p>
            <p className="text-red-600">
              <strong>ثبت نشده</strong>
            </p>
          </div>
          <div>
            <p className="text-xs text-zinc-500"> پست الکترونیکی</p>
            <p className="text-zinc-800">
              <strong>peymangeek@gmail.com</strong>
            </p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">شماره کارت</p>
            <p dir="ltr" className="text-zinc-800">
              <strong>6280 **** **** 2923</strong>
            </p>
          </div>

          <Link
            to={"/user/personalization"}
            className="px-4 py-2 text-xs rounded-lg bg-blue-600 text-white absolute left-4 duration-150 transition-all hover:opacity-90 -bottom-4 "
          >
            ویرایش اطلاعات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountQuickOverview;
