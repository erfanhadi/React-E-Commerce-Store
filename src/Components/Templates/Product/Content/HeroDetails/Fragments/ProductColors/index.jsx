import React from 'react'
import ColorOption from './ColorOption'

const ProductColors = () => {
  return (
    <div className='space-y-3'>
        <p className='text-xs font-black text-slate-600'>
            رنگ‌‌بندی:  
        </p>
        <div className="grid grid-cols-3 gap-2">
          {
            Array.from({length: 5}).map((color) => <ColorOption color='#000'/>)
          }
        </div>
    </div>
  )
}

export default ProductColors