import React from 'react'

const OrderId = ({orderId}) => {
  return (
    <p className="text-xs text-zinc-500 font-normal">
              شماره سفارش: #{orderId}
            </p>
  )
}

export default OrderId