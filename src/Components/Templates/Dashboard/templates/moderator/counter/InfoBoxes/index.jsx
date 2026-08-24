import React from 'react'
import BoxItem from './BoxItem'
import { FcGoodDecision, FcManager, FcPackage, FcPaid, FcTimeline } from 'react-icons/fc'

const InfoBoxes = () => {
  return (
    <section className='grid grid-cols-4 gap-5'>
      <BoxItem Icon={<FcGoodDecision />} label="تعداد مشتریان" value={2_948}/>
      <BoxItem Icon={<FcManager />} label="تعداد فروشندگان" value={14}/>
      <BoxItem Icon={<FcTimeline />} label="تعداد محصولات" value={149}/>
      <BoxItem Icon={<FcPaid />} label="سفارشات تکمیل شده" value={3_425}/>
    </section>
  )
}

export default InfoBoxes