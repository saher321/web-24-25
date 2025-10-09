import React from 'react'

const Myname = ({ children, name}) => {
  return (
    <>
    <div>{name}</div>
    {children}
    </>
  )
}

export default Myname