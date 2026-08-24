import React from 'react'
import SearchInput from './elements/SearchInput'
import FilterButton from './elements/FilterButton'
import SortButton from './elements/SortButton'

const FilterSystem = () => {
  return (
    <div className='my-10 grid grid-cols-2 gap-5 max-w-xl mx-auto'>
      <SearchInput />

      <FilterButton />
      <SortButton />
    </div>
  )
}

export default FilterSystem