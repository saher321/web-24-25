import React, { useContext } from 'react'
import { MyContext } from './ContextAPI/ContextStore'

const App = () => {
  const data = useContext(MyContext)
  return (
    <div>{data.name}</div>
  )
}

export default App