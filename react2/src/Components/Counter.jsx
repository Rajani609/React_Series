import { useState } from 'react'
import React from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter'>
        <p id='count-display'>you have clicked  <pre> <span className='count'>{count}</span></pre><pre> times</pre></p>
        <div className='button-container'>
        <button id='increment-btn' onClick={() => setCount(count + 1)}>increment</button>
        <button id='decrement-btn' onClick={() => setCount(count - 1)}>decrement</button>
        <button id='reset-btn' onClick={() => setCount(0)}>reset</button>
        </div>
    </div>
  )
}

export default Counter