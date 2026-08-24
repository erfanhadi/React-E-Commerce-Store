import React from 'react'

const TableHead = ({children}) => {
  return (
    <div className='*:h-8! *:px-3 border-b border-zinc-200 rounded-t-xl **:text-xs! text-zinc-500 font-medium *:max-h-14!'>
        {children}
    </div>
  )
}

export default TableHead