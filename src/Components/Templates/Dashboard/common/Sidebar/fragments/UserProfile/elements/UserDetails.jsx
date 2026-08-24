import React from "react";
import useCurrentPanel from "../../../../../../../../lib/Hooks/useCurrentPanel";

const UserDetails = () => {
  const { isModeratorPanel, isSellerPanel, isUserPanel } = useCurrentPanel();
  return (
    <div className="text-zinc-700 space-y-1.5 text-sm">
      <p className="font-medium">
        <strong>امین سعیدی</strong>
      </p>
      <p
        className={`text-[11px] select-none px-2 py-0.5 rounded-lg max-w-max ${
          isSellerPanel
            ? "bg-green-500 text-white"
            : isModeratorPanel
            ? "bg-blue-500 text-white"
            : "bg-zinc-600 text-white"
        } `}
      >
        {isUserPanel ? "مهمان" : isModeratorPanel ? "مدیر وبسایت" : "فروشنده"}
      </p>
    </div>
  );
};

export default UserDetails;
