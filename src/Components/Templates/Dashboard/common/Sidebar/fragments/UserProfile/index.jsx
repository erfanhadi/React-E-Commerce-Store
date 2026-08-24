import React from 'react'
import Avatar from './elements/Avatar'
import UserDetails from './elements/UserDetails'

const UserProfile = () => {
  return (
    <div className='h-20 primary-border-b flex items-center gap-2 px-3 cursor-pointer'>
        <Avatar />
        <UserDetails />
    </div>
  )
}

export default UserProfile