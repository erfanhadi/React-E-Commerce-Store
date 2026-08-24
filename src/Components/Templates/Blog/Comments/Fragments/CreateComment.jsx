import React from 'react'

const CreateComment = () => {
  return (
    <div className='space-y-4 w-full'>
        <textarea className='min-h-40 rounded-lg w-full border border-slate-200' placeholder='نظر  بده'></textarea>
        <input className='h-12 w-full rounded-lg border border-slate-200' placeholder='نام شما:'/>
        <input className='h-12 w-full rounded-lg  border border-slate-200' placeholder='پست الکترونیکی شما:'/>

        <button className='w-full h-12 rounded-lg bg-sky-800 text-white text-sm'>
            ثبت نظر
        </button>
    </div>
  )
}

export default CreateComment