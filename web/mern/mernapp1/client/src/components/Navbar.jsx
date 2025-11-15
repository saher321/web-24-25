import React from 'react'

const Navbar = ({ children }) => {
  return (
    <>
    <nav>
      <div>Notes Taker</div>
      <div>
        { children }
      </div>
    </nav>
    </>
  )
}

export default Navbar