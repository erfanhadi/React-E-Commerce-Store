import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({onValueChange}) => {
  return (
    <div className='h-12 primary-border text-sm flex items-center justify-center relative col-span-2 bg-zinc-50 rounded-lg overflow-hidden'>
        <FaSearch className='absolute right-4 text-zinc-400'/>
        <input type="text" 
            className='size-full absolute  focus-within:outline-none px-10 placeholder:text-xs'
            placeholder='جستجو ( بر اساس عنوان محصول یا #شناسه_محصول )'
        />

        <button className='search-button'>
            <span>جستجو کنید</span>
            <FaSearch />
        </button>
    </div>
  )
}

export default SearchInput