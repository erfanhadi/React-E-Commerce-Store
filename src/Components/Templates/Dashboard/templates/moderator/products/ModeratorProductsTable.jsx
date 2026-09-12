import Table from "../../../common/Table";
import TableHead from "../../../common/Table/elements/TableHead";
import TableCell from "../../../common/Table/elements/TableCell";
import TableBody from "../../../common/Table/elements/TableBody";
import TableRow from "../../../common/Table/elements/TableRow";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router";
import ManageProductDropdown from "../../../common/ManageProductDropdown";
import TableToolbar from "../../../common/Table/elements/TableToolbar";
import { locateImagePath } from "../../../../../../lib/helpers";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import ProductDrawer from "../../../common/ProductDrawer";

const ModeratorProductsTable = () => {

  const [isDrawerShow, setIsDrawerShow] = useState(false);
  const toggleDrawer = () => setIsDrawerShow((prev) => !prev);

  return (
    <>
      <Table>
        <TableToolbar useFlexBetween>
          <div>
            <h2 className="font-black text-lg text-zinc-800">تمامی محصولات</h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDrawer}
              className="px-3 hover:opacity-90 flex items-center h-10 rounded-md bg-blue-500 text-white"
            >
              <BiPlus />
              <span>ایجاد محصول</span>
            </button>
          </div>
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
                className="flex min-w-max underline underline-offset-2 text-blue-500  gap-1 items-center"
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

      <ProductDrawer isOpen={isDrawerShow} onToggle={toggleDrawer} />
    </>
  );
};

export default ModeratorProductsTable;
