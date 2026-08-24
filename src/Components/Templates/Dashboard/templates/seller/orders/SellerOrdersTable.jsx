import React from 'react'
import TableHead from '../../../common/Table/elements/TableHead'
import TableToolbar from '../../../common/Table/elements/TableToolbar'
import TableRow from '../../../common/Table/elements/TableRow'
import TableCell from '../../../common/Table/elements/TableCell'
import TableBody from '../../../common/Table/elements/TableBody'
import TableFooter from '../../../common/Table/elements/TableFooter'
import FilterButton from '../../moderator/orders/OrderFiltering/FilterButton'
import Search from '../../../ui/Search'
import OrderRow from '../../moderator/orders/OrderRow'
import Pagination from '../../../common/Pagination'
import Table from '../../../common/Table'
import useCurrentPanel from '../../../../../../lib/Hooks/useCurrentPanel'

const SellerOrdersTable = () => {
  const {isSellerPanel} = useCurrentPanel() 
  // این پنل قراره یا در پنل مدیر نمایش داده شود یا پنل فروشنده
  // پس ما به صورت داینامیک دیتاها و یو آی رو مدیریت می‌کنیم



  return (
    <Table>
        <TableToolbar useFlexBetween>
          <h2 className="font-black text-xl text-zinc-800">مدیریت سفارشات</h2>
          <div className="flex items-center gap-3">
            <FilterButton />
            <Search />
          </div>
        </TableToolbar>
        <TableHead>
          <TableRow>
            <TableCell>#شناسه </TableCell>
            <TableCell>تاریخ ثبت</TableCell>
            <TableCell>مشتری</TableCell>
            {!isSellerPanel && <TableCell>فروشگاه</TableCell>}
            <TableCell>وضعیت پرداخت</TableCell>
            <TableCell>وضعیت سفارش</TableCell>
            <TableCell>مبلغ سفارش</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <OrderRow panel="SELLER"/>
          <OrderRow panel="SELLER"/>
          <OrderRow panel="SELLER"/>
          <OrderRow panel="SELLER"/>
          <OrderRow panel="SELLER"/>
          <OrderRow panel="SELLER"/>
        </TableBody>

        <TableFooter className="mt-10 primary-border-t pt-5!">
          <Pagination onPageChange={() => {}} items={[]} itemsPerPage={10} />
        </TableFooter>
      </Table>
  )
}

export default SellerOrdersTable