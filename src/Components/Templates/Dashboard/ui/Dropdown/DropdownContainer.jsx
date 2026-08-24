import React from 'react'

const DropdownContainer = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export default DropdownContainer