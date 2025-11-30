import React from 'react'
import { useNavigate } from 'react-router';

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("userToken");
  //   navigate('/login')
  // }
  return (
    <>
    <nav>
      <div>Notes Taker</div>
      <div>
        { children }
      </div>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </nav>
    </>
  )
}

export default Navbar