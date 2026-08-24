import React from 'react'

const DataRow = ({label, value}) => {
  return (
    <div className='h-10 text-xs!'>
    <p>{label}</p>
    <p>{typeof value === "number" ? Number(value).toLocaleString('fa-IR') : value}</p>
</div>
  )
}

export default DataRow