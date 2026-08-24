import React from "react";
import { BiMapPin } from "react-icons/bi";

const UserOrderAddress = () => {
  return (
    <div className="details-item">
      <div className="flex items-center gap-1">
        <BiMapPin />
        <span>ارسال به:</span>
      </div>
      <p className="text-zinc-700!">زنجان, خیابان امام, کوچه معینی, قطعه 1/2</p>
    </div>
  );
};

export default UserOrderAddress;
