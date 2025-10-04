import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import ColorChanger from './assets/ColorChanger';

const App = () => {

  const no1 = useRef(null);
  const no2 = useRef(null);

  const [result, setResult] = useState("")

  const show = () => {
    let a = no1.current.value;
    let b = no2.current.value;
    let sum = Number(a)+Number(b)
    console.log(sum);

    setResult(`Sum is: ${sum}`)
  }
  return (
    <>
    {/* <h3>{result}</h3>
    <input type="number" ref={no1}  />
    <input type="number" ref={no2}  /> <br />
    <button onClick={show}>Show text</button>

    <br />
    <br /> */}
    <div className="min-h-screen w-full relative bg-white">
  {/* Soft Green Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at center, #8FFFB0, transparent)
      `,
    }}
  />
     
    <ColorChanger />
</div>
    </>
  )
}

export default App