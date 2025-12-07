import React from 'react'
import Navbar from '../components/Navbar'

export const WebLayout = ({children}) => {
  return (
    <div>
      <Navbar />

      <div className='m-5'>
        {children}
      </div>
      
      <footer>
        All right reserved.
      </footer>
    </div>
  )
}
