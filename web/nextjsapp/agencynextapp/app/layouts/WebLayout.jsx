import React from 'react'
import Navbar from '../components/Navbar'

export const WebLayout = ({children}) => {
  return (
    <div>
      <Navbar />

      {children}
      
      <footer>
        All right reserved.
      </footer>
    </div>
  )
}
