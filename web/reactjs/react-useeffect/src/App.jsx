import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)

  const [counter5, setCounter5] = useState(0)

  // useEffect(()=>{
  //   console.log("This is simple useEffect hook")
  // })

  useEffect(()=>{
    const timing = () => {
      setInterval(()=>{
        console.log("Timer function is called");
      }, 5000) // 5 seconds
    }
    timing();
  })

  useEffect(()=>{
    console.log("Triggered only one time")
  }, [])

  useEffect(()=>{
    console.log("This useEffect hook is triggered")
  }, [counter])


   useEffect(()=>{
    console.log("Counter 5 is triggered")
  }, [counter5])


  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const counter5app = () => {
    setCounter5(counter5 + 5)
  }

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={increaseCounter}>ADD 1</button>

    <h1>{counter5}</h1>
    <button onClick={counter5app}>ADD 5</button>
    </>
  )
}

export default App