import { useState } from "react"


const ColorChanger = () => {
  const [clr, setClr] = useState("black")

  const red = () => {
    setClr("red")
  }

  const green = () => {
    setClr("green")
    
  }

  const blue = () => {
    setClr("blue")
    
  }

  return (
    <>
      <button onClick={red}>Red</button> | {" "}
      <button onClick={green}>Green</button> | {" "} 
      <button onClick={blue}>Blue</button> | {" "}
      <button onClick={() => setClr("black")}>Clear</button> 

      <br /> <br />
      <div className="colordiv" style={{
        backgroundColor: clr
      }}></div>
    </>
  )
}

export default ColorChanger