import { useState } from 'react'

import './App.css'

import Card from './Components/Card'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>

    <Button handleClick={handleClick} text="click me">
      <h1>{count}</h1>
    </Button>
     {/* <Card name="Card 1">
      <h1>React3</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia tenetur molestias amet explicabo incidunt nesciunt rem? Deserunt, earum voluptatum? Adipisci iure aspernatur fugit tenetur? Suscipit ipsa nam perferendis accusamus aperiam?</p>
     </Card> */}

    </div>
  )
}

export default App
