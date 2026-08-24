import React from 'react'
import DataRow from './DataRow'

const ShopStats = () => {
  return (
<div className="bg-white p-4 primary-border rounded shadow">
        <div className="flex text-xs text-zinc-500 font-bold! items-center justify-between">
          <p>وضعیت فروشگاه شما</p>
          <span className="font-medium text-green-500">فعال</span>
        </div>
        <div className="mt-5 text-sm text-zinc-600 divide-y divide-zinc-200 *:flex *:items-center *:justify-between">
          <DataRow label={"تعداد فروش"} value={409} />
          <DataRow label={"سفارشات باز"} value={11} />
          <DataRow label={"تعداد محوصلات"} value={42} />
          <DataRow label={"تعداد مرجوعی"} value={1} />
        </div>
      </div>  )
}

export default ShopStats