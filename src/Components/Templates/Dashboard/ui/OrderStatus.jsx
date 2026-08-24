import React from "react";

const OrderStatus = ({ status, isStaticElement }) => {
  let labelText = "";
  let textColor = "";
  let bgColor = "";

  switch (status.toUpperCase()) {
    case "PAID":
      labelText = "پرداخت شده";
      textColor = "text-green-500";
      bgColor = "bg-green-500/10";
      break;
    case "PRODUCTS_SENT":
      labelText = "محصولات ارسال شده";
      textColor = "text-blue-500";
      bgColor = "bg-blue-500/10";
      break;
    case "PREPARING":
      labelText = "در حال آماده‌سازی";
      textColor = "text-yellow-500";
      bgColor = "bg-yellow-500/10";
      break;
    case "PROCESSING":
      labelText = "در حال پردازش";
      textColor = "text-indigo-500";
      bgColor = "bg-indigo-500/10";
      break;
    default:
      labelText = "نامشخص";
      textColor = "text-gray-500";
      bgColor = "bg-gray-500/10";
      break;
  }

  return (
    <div
      className={`${isStaticElement ? "static h-8! px-4!" : "absolute"} left-0 select-none top-0 text-[11px] flex items-center rounded justify-center ${textColor} ${bgColor} px-5 h-10  min-w-max`}
    >
      {labelText}
    </div>
  );
};

export default OrderStatus;
