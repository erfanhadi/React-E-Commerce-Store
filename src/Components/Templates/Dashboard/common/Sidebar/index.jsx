import React from "react";
import PanelHeader from "./fragments/PanelHeader";
import UserProfile from "./fragments/UserProfile";
import Logout from "./fragments/Logout";
import UserLinks from "./fragments/NavLinks/UserLinks";
import ModeratorLinks from "./fragments/NavLinks/ModeratorLinks";
import SellerLinks from "./fragments/NavLinks/SellerLinks";
import useCurrentPanel from "../../../../../lib/Hooks/useCurrentPanel";

const Sidebar = () => {
  const { isModeratorPanel, isUserPanel } = useCurrentPanel();
  return (
    <aside className="w-70 bg-white shadow-xl flex flex-col justify-between h-dvh! sticky top-0! right-0 border-l border-zinc-200">
      <div>
        <PanelHeader />
        <UserProfile />
        <main className="p-3 space-y-1.5">
        {isUserPanel ? (
          <UserLinks />
        ) : isModeratorPanel ? (
          <ModeratorLinks />
        ) : (
          <SellerLinks />
        )}
       </main>
      </div>
      <Logout />
    </aside>
  );
};

export default Sidebar;
