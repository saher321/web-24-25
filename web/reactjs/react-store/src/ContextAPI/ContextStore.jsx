import React, { createContext } from 'react'

export const MyContext = createContext();

const ContextStore = ({children}) => {
  const appName = "ABC Website"
  const myname = "Qamrosh"
  const age = 25
  return (
    <MyContext.Provider value={{appName, myname, age}}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextStore