import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div className='flex items-center gap-2'>
        <input type="text" className='h-10 font-medium text-sm text-zinc-700  bg-linear-to-t from-zinc-100 shadow-sm to-zinc-50 border-current/15 outline-none duration-150 focus-within:ring-4! ring-zinc-500/10 focus-within:ring-offset-2 px-4  w-[300px] rounded-md primary-border placeholder:text-sm placeholder:text-zinc-400' 
            placeholder='جستجو کنید ..'
        />
        <button className="size-10 text-lg rounded-md bg-linear-to-t border primary-border shadow-sm from-zinc-100 to-zinc-50 flex items-center justify-center">
            <BiSearch />
        </button>
    </div>
  )
}

export default Search