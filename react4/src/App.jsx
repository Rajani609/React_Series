import { useState } from 'react'

import './App.css'
import Lift from './Component/Lift'

function App() {
  const [name, setName] = useState("")

  return (
    <>
      <Lift name={name} setName={setName} />
      <Lift name={name} setName={setName} />
      <p>Name state variable ki value inside App: {name}</p>
    </>
  )
}

export default App
