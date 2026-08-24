import React from 'react'

const TableFooter = ({useFlexBetween, children, className, ...props}) => {
  return (
    <div className={`${useFlexBetween ? 'flex justify-between items-center' : ''} min-h-14 ${className}  bg-zinc-50 primary-border-t rounded-b-xl`} {...props}>
        
        {children}
    </div>
  )
}

export default TableFooter