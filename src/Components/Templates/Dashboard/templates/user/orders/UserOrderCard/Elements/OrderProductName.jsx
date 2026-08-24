import React from 'react'

const OrderProductName = ({name}) => {
  return (
    <p className="text-sm text-zinc-700">
    <strong>
      {name}
    </strong>
  </p>
  )
}

export default OrderProductName