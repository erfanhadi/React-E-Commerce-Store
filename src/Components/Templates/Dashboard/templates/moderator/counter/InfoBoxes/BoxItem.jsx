import React from 'react'
import { FcCustomerSupport, FcGoodDecision } from 'react-icons/fc'

const BoxItem = ({Icon, label, value}) => {
  return (
    <article className='h-28 relative shadow rounded-lg overflow-hidden flex items-center justify-center primary-border'>
        <div className='text-9xl absolute -right-6 -top-6 opacity-40 text-blue-500'>
        {Icon}
        </div>
        <div className="space-y-2 text-center">
            <p className='text-sm text-zinc-500'>
          {label}
            </p>
            <p className="font-bold text-xl text-blue-600">
                {Number(value).toLocaleString('fa-IR')}
            </p>
        </div>

    </article>
  )
}

export default BoxItem