import React from 'react'
import { BiSearch } from 'react-icons/bi';

const BY_SELLER = "BY_SELLER";
const BY_ORDERID = "BY_ORDERID";
const BY_STATUS = "BY_STATUS";
const BY_PAYMENT_STATUS = "BY_PAYMENT_STATUS";

const FilterSearchInput = ({active}) => {
    const placeholder = active == BY_SELLER ? "جستجو بر اساس فروشنده" : active == BY_ORDERID ? "جستجو بر اساس شماره سفارش" : active == BY_STATUS ? "جستجو بر اساس وضعیت سفارش" : "جستجو بر اساس وضعیت پرداخت"
  return (
    <div className='w-full flex items-center gap-2'>
        <input type="text" placeholder={placeholder} className='w-full  placeholder:text-xs h-10 px-4 outline-none text-sm! rounded-md bg-linear-to-t from-zinc-100/70 to-zinc-50/20 shadow border primary-border' />
        <button className='text-sm! size-10! min-w-10 flex items-center duration-150 hover:opacity-90 focus-within:ring-4 ring-current/10 justify-center rounded-md bg-linear-to-t from-zinc-100/70 to-zinc-50/20 shadow primary-border'>
        <BiSearch className='size-5'/>
        </button>
    </div>
  )
}

export default FilterSearchInput