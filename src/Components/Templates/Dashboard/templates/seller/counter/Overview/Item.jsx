import React from "react";

const OverviewItem = ({ icon, label,  value, symbol = "+", bgColor, textColor, footerLabel }) => {
  return (
    <article className="gap-2!">
      <div className="space-y-2">
        <p className="text-xs text-zinc-600"> {label} </p>
        <p className={`font-black text-xl ${textColor}`}>
          {Number(value).toLocaleString("fa-IR")}{symbol}
        </p>
        <p className="flex items-center gap-1">
          <span className="text-xs text-zinc-600">{footerLabel}</span>
        </p>
      </div>
      <div className={`${bgColor} text-2xl! size-14 flex items-center justify-center ${textColor} rounded-xl border border-current/20`}>
        {icon}
      </div>
    </article>
  );
};

export default OverviewItem;
