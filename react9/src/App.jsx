import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="App">
      <h1 id='heading'>App Card</h1>
      <img src="" alt="god"  id='app-id'/>
      <br />
      <br />
      <br /><br />
      <button id='app-button'>open</button>
    </div></>
  )
}

export default App
