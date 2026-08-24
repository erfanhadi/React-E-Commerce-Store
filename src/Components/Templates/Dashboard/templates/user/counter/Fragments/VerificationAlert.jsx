import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router";

const VerificationAlert = () => {
  return (
    <div className="text-sm text-yellow-600 flex items-center justify-between mx-auto border-yellow-600/20 bg-yellow-500/10 p-3 rounded-lg border">
      <div className=" inline-flex items-center gap-2">
        <FaInfoCircle className="text-lg" />
        <p>
          کاربر محترم, جهت استفاده از تمامی خدمات وبسایت لطفا اطلاعات خود را
          تکمیل بفرمایید.
        </p>
      </div>
      <Link
        className="px-3 py-1.5 rounded-lg bg-yellow-500 text-white"
        to="/user/personalization"
      >
        تکمیل پروفایل
      </Link>
    </div>
  );
};

export default VerificationAlert;
