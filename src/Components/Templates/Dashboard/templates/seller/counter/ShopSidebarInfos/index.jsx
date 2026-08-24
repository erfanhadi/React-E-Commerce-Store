import React from "react";
import DataRow from "./fragments/DataRow";
import MostViewedCategories from "./fragments/MostViewedCategories";
import ShopRate from "./fragments/ShopRate";
import ShopStats from "./fragments/ShopStats";

const ShopSidebarInfos = () => {
  return (
    <>
      <ShopStats />
      <ShopRate />
      <MostViewedCategories />
    </>
  );
};

export default ShopSidebarInfos;
