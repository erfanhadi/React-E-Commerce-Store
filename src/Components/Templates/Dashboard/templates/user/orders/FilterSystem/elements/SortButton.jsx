import React from 'react'
import { BiSort } from 'react-icons/bi'

const SortButton = () => {
  return (
    <div className='h-14 flex items-center hover:bg-zinc-100/70 select-none bg-zinc-50 cursor-pointer justify-center gap-1.5 text-zinc-600 rounded-lg  text-xs primary-border'>
      <BiSort className='text-sm!'/>
      <span>
        مرتب‌سازی
      </span>
    </div>
  )
}

export default SortButton