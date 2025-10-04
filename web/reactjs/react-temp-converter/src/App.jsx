import { useRef } from "react"

const App = () => {
  const f = useRef(null)
  const c = useRef(null)

  const convert = () => {
    let far = f.current.value;
    if (far == "") {
      alert("Please enter value in Fahrenite")
      return;
    }

    let result = (far - 32) * 5/9

    c.current.value = result.toFixed(2);
  }
  return (
    <>
    <h1>F to C</h1>
    <input type="text" ref={f} placeholder="Enter value in F"  /> <br /> <br />
    <button onClick={convert}>Convert</button> <br /> <br />
    <input type="text" ref={c} placeholder="Result in C"  />
    </>
  )
}

export default App