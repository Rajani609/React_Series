import { useState } from 'react'

import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Slice'

function App() {


  const [amount , setAmount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value);

  function handleIncrement(){
    dispatch(increment());

  }
  function handleDecrement(){
    dispatch(decrement());
    

  }
  function handleReset(){
    dispatch(reset())
  }
  function handleIncrementByAmount(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
    <button onClick={handleIncrement}>+</button>
    <p>Count:{count}</p>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>Reset</button>
    <br />
    <br />
    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder='Enter amount' />
    <button onClick={handleIncrementByAmount}>Inc by Amount</button>

    </>
  )
}

export default App
