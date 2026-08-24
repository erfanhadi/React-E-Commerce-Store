import React from "react";
import Table from "../../../common/Table";
import TableHead from "../../../common/Table/elements/TableHead";
import TableCell from "../../../common/Table/elements/TableCell";
import TableBody from "../../../common/Table/elements/TableBody";
import TableRow from "../../../common/Table/elements/TableRow";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router";
import { BiCheck } from "react-icons/bi";
import ManageProductDropdown from "../../../common/ManageProductDropdown";
import TableToolbar from "../../../common/Table/elements/TableToolbar";
import Search from "../../../ui/Search";
import { locateImagePath } from "../../../../../../lib/helpers";

const ModeratorProductsTable = () => {
  return (
    <Table>
      <TableToolbar useFlexBetween>
        <div>
          <h2 className="font-black text-lg text-zinc-800">تمامی محصولات</h2>
        </div>
        <Search />
      </TableToolbar>
      <TableHead>
        <TableRow>
          <TableCell>شناسه</TableCell>
          <TableCell> محصول</TableCell>
          <TableCell>فروشگاه</TableCell>
          <TableCell>قیمت</TableCell>
          <TableCell>وضعیت</TableCell>
          <TableCell>مدیریت</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={"text-zinc-600 *:h-16! font-medium text-xs!"}>
        <TableRow>
          <TableCell>{crypto.randomUUID().slice(0, 12)}...</TableCell>
          <TableCell className="flex items-center gap-4 text-xs font-medium">
            <img
              src={locateImagePath("product-1.jpg")}
              className="size-10"
              alt=""
            />
            <span className="line-clamp-1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            </span>
          </TableCell>
          <TableCell>
            <Link
              to="/moderator/seller/shopName"
              className="flex min-w-max underline underline-offset-2 text-blue-500 items-center  gap-1 flex items-center"
            >
              <BsShop />
              <span>شاپینو</span>
            </Link>
          </TableCell>
          <TableCell>
            <span className="font-bold">
              {Number(49_750_000).toLocaleString("fa-IR")}
            </span>
            <span className="text-sm px-1 text-zinc-600">تومان</span>
          </TableCell>
          <TableCell className="flex items-center gap-2">
            <p className="size-2  bg-green-500 rounded-xs"></p>

            <span>منتشر شده</span>
          </TableCell>
          <TableCell>
            <ManageProductDropdown />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ModeratorProductsTable;
