import React from "react";
import { Link } from "react-router";
import { TbMessagePlus } from "react-icons/tb";
import { locateImagePath } from "../../../../../../../lib/helpers";

const LatestTickets = () => {
  return (
    <div className="rounded-xl p-5 primary-border">
      <div className="grow flex items-center justify-between">
        <h3 className="font-bold text-zinc-700">تیکت های اخیر</h3>
        <Link className="font-medium text-blue-500 text-sm" to="/user/tickets">
          لیست کامل
        </Link>
      </div>

      <div className="p-5 rounded-lg primary-border mt-5 py-10 flex items-center justify-center flex-col gap-4">
        <img
          src={locateImagePath("no-messages.png")}
          className="size-40"
          alt="تیکت یافت نشد"
        />
        <p>هیچ تیکتی برای نمایش وجود ندارد.</p>
        <Link to="/user/tickets" className="px-3 py-1 rounded-lg primary-border hover:border-blue-600! duration-150 text-blue-500 hover:bg-blue-500 hover:text-white flex items-center justify-center gap-1">
        <span>
            ایجاد تیکت
        </span>
    <TbMessagePlus />
        </Link>
      </div>
    </div>
  );
};

export default LatestTickets;
