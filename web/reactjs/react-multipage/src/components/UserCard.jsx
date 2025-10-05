import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='user-card'>
      {user.name} <br />
      <small>@{user.username}</small>
    </div>
  )
}

export default UserCard