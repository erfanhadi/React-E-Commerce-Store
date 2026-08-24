import React from "react";
import Table from "../../../../common/Table";
import TableToolbar from "../../../../common/Table/elements/TableToolbar";
import TableHead from "../../../../common/Table/elements/TableHead";
import TableRow from "../../../../common/Table/elements/TableRow";
import TableCell from "../../../../common/Table/elements/TableCell";
import TableBody from "../../../../common/Table/elements/TableBody";
import TableFooter from "../../../../common/Table/elements/TableFooter";
import Pagination from "../../../../common/Pagination";
import SellerOrderRow from "./SellerOrderRow";

const RecentOrders = () => {
  return (
    <div>
      <Table>
        <TableToolbar useFlexBetween>
          <div>
            <h1 className="font-black text-zinc-700 text-base md:text-lg">
              جدیدترین سفارشات
            </h1>
          </div>
        </TableToolbar>

        <TableHead>
          <TableRow>
            <TableCell>محصول</TableCell>
            <TableCell>دسته بندی</TableCell>
            <TableCell>قیمت محصول</TableCell>
            <TableCell>تسویه با شما</TableCell>
            <TableCell>وضعیت</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
         <SellerOrderRow />
         <SellerOrderRow />
         <SellerOrderRow />
         <SellerOrderRow />
        </TableBody>

        
        <TableFooter className={"flex items-center justify-center"}>
            <Pagination 
                onPageChange={() => {}}
                items={[]}
                itemsPerPage={5}
            />
        </TableFooter>
      </Table>
    </div>
  );
};

export default RecentOrders;
