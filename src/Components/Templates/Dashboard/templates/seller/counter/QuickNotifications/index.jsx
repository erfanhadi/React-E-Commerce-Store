import React from "react";
import Alert from "../../../../ui/Alert";
import { BiBell } from "react-icons/bi";

const QuickNotifications = () => {
  return (
    <div className="space-y-5">
        <h2 className="flex items-center  gap-2 font-bold text-zinc-600">
            <BiBell className="text-2xl"/>
            <span> جدیدترین اعلانات</span>
        </h2>
      <div className="space-y-2 *:py-1!  **:text-sm! *:w-[500px]! *:min-w-[500px]! *:cursor-pointer">
        <Alert
          variant="info"
          className="rounded-full!  max-w-max!"
          message="+۱۳ پیغام جدید دارید"
        />
        <Alert
          variant="success"
          className="rounded-full! max-w-max!"
          message="+۲۵ سفارش جدید ثبت شد "
        />

      </div>
    </div>
  );
};

export default QuickNotifications;
