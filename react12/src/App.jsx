import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  const expensiveTask = (num) => {
    console.log('expensive task')
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2
  }

  let doubleCount = useMemo(() => expensiveTask(input), [input])

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        increment
      </button>

      <div>
        count: {count}
      </div>
      <input 
      type="number"
      placeholder='Enter a number'
      value={input}
      onChange={(e) => {
        setInput(Number(e.target.value))
        // doubleCount = expensiveTask(Number(e.target.value))
      }} />

      <div>
        double count: {doubleCount}
      </div>
    </>
  )
}

export default App
