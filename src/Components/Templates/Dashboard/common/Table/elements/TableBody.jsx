import clsx from 'clsx'
import React from 'react'

const TableBody = ({children, className}) => {
  return (
    <div className={clsx('py-0! divide-y divide-zinc-200 overflow-visible', className)}>
        {children}
    </div>
  )
}

export default TableBody