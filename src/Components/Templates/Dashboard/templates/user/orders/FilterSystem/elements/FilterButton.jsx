import React from 'react'
import { FiFilter } from 'react-icons/fi'

const FilterButton = () => {
  return (
    <div className='h-14 flex items-center hover:bg-zinc-100/70 select-none bg-zinc-50 cursor-pointer justify-center gap-1.5 text-zinc-600 rounded-lg  text-xs primary-border'>
      <FiFilter />
      <span>فیلتر</span>
    </div>
  )
}

export default FilterButton