import React from "react";
import TableRow from "../../../../common/Table/elements/TableRow";
import TableCell from "../../../../common/Table/elements/TableCell";
import OrderStatus from "../../../../ui/OrderStatus";
import { FaEllipsis } from "react-icons/fa6";
import Dropdown from "../../../../ui/Dropdown";
import DropdownItem from "../../../../ui/Dropdown/DropdownItem";
import { locateImagePath } from "../../../../../../../lib/helpers";

const SellerOrderRow = () => {
  return (
    <TableRow className={"min-h-18!"}>
      <TableCell>
        <div className="flex items-center *:line-clamp-1! text-xs font-medium gap-2">
          <img
            src={locateImagePath("product-1.jpg")}
            className="min-w-10! max-w-10!"
            alt=""
          />
          <p>لپتاپ ASUS گیمینگ مشکی</p>
        </div>
      </TableCell>
      <TableCell>لپتاپ</TableCell>
      <TableCell>{Number(97_600_000).toLocaleString("fa-IR")} تومان</TableCell>
      <TableCell>{Number(94_350_000).toLocaleString("fa-IR")} تومان</TableCell>
      <TableCell>
        <OrderStatus isStaticElement status={"PRODUCTS_SENT"} />
      </TableCell>
      <TableCell>
        <Dropdown
          className="max-w-40 max-h-max!  **:text-xs!"
          Trigger={
            <button>
              <FaEllipsis />
            </button>
          }
        >
          <DropdownItem>تغییر وضعیت سفارش</DropdownItem>
          <DropdownItem>لغو سفارش</DropdownItem>
          <DropdownItem>گزارش مشکل</DropdownItem>
          <DropdownItem>تماس با مشتری</DropdownItem>
        </Dropdown>
      </TableCell>
    </TableRow>
  );
};

export default SellerOrderRow;
