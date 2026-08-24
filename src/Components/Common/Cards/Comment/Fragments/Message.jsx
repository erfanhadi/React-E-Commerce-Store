import React from 'react'

const Message = ({message}) => {
  return (
    <div className='text-sm line-clamp-4 font-medium text-slate-600 text-justify ps-12'>
        {message}
    </div>
  )
}

export default Message