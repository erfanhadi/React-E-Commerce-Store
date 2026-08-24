import React from "react";
import OrderStatus from "../../../../ui/OrderStatus.jsx";
import DetailsButton from "./Elements/DetailsButton";
import OrderProductName from "./Elements/OrderProductName";
import OrderId from "./Elements/OrderId";
import OrderSellerShop from "./Elements/OrderSellerShop";
import UserOrderAddress from "./Elements/UserOrderAddress";
import CreatedDate from "./Elements/OrderCreatedDate.jsx";
import OrderPrice from "./Elements/OrderPrice";
import { locateImagePath } from "../../../../../../../lib/helpers.js";

const UserOrderCard = () => {

  return (
    <article className="user-order-card group">
      <div className="product-image">
        <img src={locateImagePath("product-1.jpg")} />
      </div>

      {/* Content */}
      <div className="content">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-2 ">
            <OrderProductName name="خرید لپ تاپ 16 اینچی اچ پی VICTUS 16 R1021 - C با قیمت ویژه!" />
            <OrderId orderId={432455} />
          </div>

          {/* Details */}
          <div className="space-y-3 *:flex *:items-center *:gap-1 text-xs text-zinc-500">
            <OrderSellerShop />
            <UserOrderAddress />
            <CreatedDate />
          </div>

          <div className="flex items-center justify-between">
            <OrderPrice />
          </div>
        </div>
      </div>
      <DetailsButton />

      {/* // PAID, PRODUCTS_SENT, PREPARING, PROCESSING */}
      <OrderStatus status={"PRODUCTS_SENT"} />
    </article>
  );
};

export default UserOrderCard;
