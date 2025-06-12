import {  useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)

  let val = useRef(0)

  const handleclick = (e) => {
    setCount(count + 1)
    val.current = val.current + 1
    console.log("val", val.current)
  }

  useEffect(() => {
    console.log("message render hua", count)
  }) 

  return (
    <>
      <button onClick={handleclick}>
        increment
      </button>
      <br />
      <br />

          <button>
            Count: {count}
          </button>
    </>
  )
}

export default App
