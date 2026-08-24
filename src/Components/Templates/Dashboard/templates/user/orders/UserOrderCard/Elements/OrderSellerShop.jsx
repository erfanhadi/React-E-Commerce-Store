import React from "react";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router";

const OrderSellerShop = () => {
  return (
    <div className="details-item">
      <div className="flex items-center gap-1">
        <BsShop />
        <span>فروشنده:</span>
      </div>
      <Link to={""} className="text-blue-600!">
        شاپینو
      </Link>
    </div>
  );
};

export default OrderSellerShop;
