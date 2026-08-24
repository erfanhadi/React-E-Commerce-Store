import React from "react";
import { BsStars } from "react-icons/bs";

const AiOverview = () => {
  return (
    <div className="space-y-6">
      <div className="flex-ic gap-3">
        <div className="size-10 flex-center bg-[url('/assets/static/ai-bg.svg')] bg-cover bg-center rounded-xl text-white animate-pulse text-xl">
          <BsStars />
        </div>
        <div>
          <p className="text-base font-bold">خلاصه دیدگاه‌های خریدارها</p>
          <p className="text-xs text-slate-500">
          تولید شده با هوش مصنوعی
          </p>
        </div>
      </div>
      <div className="p-6 bg-[#F5F6FF] rounded-lg text-slate-800 font-medium text-[15px] leading-7 line-clamp-3">
      هدفون بلوتوثی سبزچاینیز مدل SabzPod با طراحی سبک و راحت خود، به ویژه برای مکالمات و استفاده در محیط‌های شلوغ بسیار مناسب است. کاربران به راحتی می‌توانند از آن در حین رانندگی یا ورزش استفاده کنند و از این که صدای محیط را می‌شنوند، ابراز رضایت کرده‌اند. کیفیت صدای مکالمه این هدفون معمولاً خوب است و برخی از کاربران مدت زمان شارژدهی بالای آن را نیز تأکید کرده‌اند.

      </div>
    </div>
  );
};

export default AiOverview;
