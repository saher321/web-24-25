import React, { useContext } from 'react'
import Myname from './components/Myname'
import { MyContext } from './ContextAPI/ContextStore'
import AppName from './components/AppName'

const App = () => {
  const data = useContext(MyContext)
  return (
    <>
    <AppName appname={data.appName}/>
    {data.myname} <br />
    {data.age}
    <Myname name={data.myname}>
      <h1>This is my name</h1>
    </Myname>
    </>
  )
}

export default App