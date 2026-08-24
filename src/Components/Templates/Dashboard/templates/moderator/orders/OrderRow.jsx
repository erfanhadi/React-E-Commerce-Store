import React from "react";
import TableRow from "../../../common/Table/elements/TableRow";
import TableCell from "../../../common/Table/elements/TableCell";
import { Link } from "react-router";
import { MdCancel, MdOpenInNew } from "react-icons/md";
import { FaEllipsis } from "react-icons/fa6";
import Dropdown from "../../../ui/Dropdown";
import DropdownItem from "../../../ui/Dropdown/DropdownItem";
import { BiCheck, BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import useCurrentPanel from "../../../../../../lib/Hooks/useCurrentPanel";

const OrderRow = ({ panel = "MODERATOR" }) => {
  const { isSellerPanel } = useCurrentPanel();
  return (
    <TableRow className="h-12  text-zinc-600! **:text-[13px]!">
      <TableCell dir="rtl" className="text-end">
        <p dir="ltr" className="text-end px-5 text-zinc-500">
          #1
        </p>
      </TableCell>

      <TableCell>
        <span>۲۶ آبان ۱۴۰۴</span>
      </TableCell>

      <TableCell>امین سعیدی</TableCell>

      {!isSellerPanel && (
        <TableCell>
          <Link className="text-blue-500  underline underline-offset-2   flex items-center gap-2">
            <MdOpenInNew />
            <span>شاپینو</span>
          </Link>
        </TableCell>
      )}

      <TableCell>
        <div className="size-2.5 rounded-sm bg-green-500" />
        <span className="text-xs! pb-0.5">پرداخت موفق</span>
      </TableCell>

      <TableCell>
        <div className="size-2.5 rounded-sm bg-yellow-500" />
        <span className="text-xs! pb-0.5">درحال آماده‌سازی</span>
      </TableCell>

      <TableCell>
        <span>{Number(29_495_999).toLocaleString("fa-IR")}</span>
        <span>تومان</span>
      </TableCell>

      <TableCell>
        <Dropdown
          Trigger={
            <div>
              <FaEllipsis />
            </div>
          }
        >
          <DropdownItem onClick={() => {}}>
            <BiCheck />
            <span>تغییر وضعیت</span>
          </DropdownItem>
          <DropdownItem>
            <MdCancel />
            <span>لغو سفارش</span>
          </DropdownItem>
          <DropdownItem>
            <BiPhoneCall />
            <span>تماس با مشتری</span>
          </DropdownItem>
          <DropdownItem>
            <BiInfoCircle />
            <span>جزئیات سفارش</span>
          </DropdownItem>
        </Dropdown>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
