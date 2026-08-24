import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const NotificationCard = () => {
  return (
    <article className="flex relative min-h-22 py-2 px-3 hover:bg-zinc-100/50 items-center gap-4 cursor-pointer transition-all duration-150">
      <div className="size-14 min-w-14 flex items-center justify-center text-lg rounded-full bg-emerald-600/10 text-emerald-600">
        <FaMessage />
      </div>
      <div className="text-xs space-y-1.5">
        <p className="font-bold">خدمات شاپینو چطور بود؟</p>
        <p className="text-zinc-500 font-medium">
          ممنون می‌شویم به کیفیت کالاهای خریدتان امتیاز بدهید و دیدگاهتان را ثبت
          کنید.
        </p>
      </div>
    </article>
  );
};

export default NotificationCard;
