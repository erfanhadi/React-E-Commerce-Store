import React from "react";
import NotificationCard from "../../../../common/Cards/notification-card";
import { Link } from "react-router";

const LatestNotifications = () => {
  return (
    <div className="pl-4 text-justify pr-5 py-5 rounded-xl primary-border">
      <h3 className="text-zinc-700 font-bold">پیام های اخیر</h3>
      <div className="mt-5 divide-y divide-zinc-200">
        {Array.from({ length: 4 }).map((item, index) => (
          <NotificationCard key={index} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-end">
        <Link className=" text-xs px-2 py-1 rounded-lg duration-150 hover:opacity-90 bg-linear-to-t from-blue-600 to-blue-500 text-white">
          مشاهده همه
        </Link>
      </div>
    </div>
  );
};

export default LatestNotifications;
