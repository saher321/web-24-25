import React, { createContext } from 'react'

export const MyContext = createContext();

const ContextStore = ({children}) => {
  const name = "Qamrosh"
  const age = 20
  return (
    <MyContext.Provider value={{name, age}}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextStore