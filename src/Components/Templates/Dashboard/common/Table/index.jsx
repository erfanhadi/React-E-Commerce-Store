import React from 'react'

const Table = ({children}) => {
  return (
    <div className='primary-border  bg-white *:p-2 rounded-xl'>
      {children}
    </div>
  )
}

export default Table