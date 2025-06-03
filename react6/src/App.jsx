import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleclick() {
    alert("Button Clicked")

  }
  function handletext(e) {
    
    console.log("Text Changed:", e.target.value)
  }
  function handlesubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Submitted");
    alert("Form Submitted Successfully");
  } 

  return (
    <>
      <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={handletext} />
        <button type="submit">Submit</button>
      </form>

      <p onMouseOver={() => alert("Mouse Hovered")} style={{border: "1px solid black"}}>main para hu</p>
      <button onClick={handleclick}>Click me</button>

    </>



  )
}

export default App
