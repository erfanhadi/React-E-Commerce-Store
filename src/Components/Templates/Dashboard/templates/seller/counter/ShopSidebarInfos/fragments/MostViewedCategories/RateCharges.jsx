import React from "react";

const RateCharges = ({ charges }) => {
  return (
    <div className="flex items-end gap-0.5">
      {/* ستون اول */}
      <div
        className={`w-1 rounded-full h-2 ${
          charges === 1
            ? "bg-red-500"
            : charges === 2
            ? "bg-yellow-500"
            : charges == 3
            ? "bg-emerald-500"
            : "bg-zinc-200"
        }`}
      />

      {/* ستون دوم */}
      <div
        className={`w-1 rounded-full h-3 ${
          charges == 2
            ? "bg-yellow-500"
            : charges == 3
            ? "bg-emerald-500"
            : "bg-zinc-200"
        }`}
      />

      {/* ستون سوم */}
      <div
        className={`w-1 rounded-full h-4 ${
          charges >= 3 ? "bg-emerald-500" : "bg-zinc-200"
        }`}
      />
    </div>
  );
};

export default RateCharges;
