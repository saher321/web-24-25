import React from 'react'
import Navbar from '../components/Navbar'
import page404 from '../assets/page404.png'
const Page404 = () => {
  return (
    <div>
      <Navbar />
      <div className='page-404'>
        <img src={page404} alt="" />
      </div>
    </div>
  )
}

export default Page404