import React from 'react'

const OrderPrice = () => {
  return (
    <p className="inline-flex gap-1 items-end text-lg text-green-600">
    <strong>{Number(76_445_000).toLocaleString("fa-IR")}</strong>
    <span className="text-sm!">تومان</span>
  </p>
  )
}

export default OrderPrice