import React from "react";
import useCurrentPanel from "../../../../../../lib/Hooks/useCurrentPanel";

const PanelName = () => {
  const {isModeratorPanel,isUserPanel} = useCurrentPanel()

  return (
    <header className="sidebar-header primary-border">
      <p>
        {isUserPanel
          ? "پنل کاربری"
          : isModeratorPanel
          ? "پنل مدیریت"
          : "پنل فروشنده"}
      </p>
    </header>
  );
};

export default PanelName;
