import { useState } from 'react'

import './App.css'
import ColorSwitch from './ColorSwitch.jsx'

function App() {
  const [count, setCount] = useState(0);


  function handleclick() {
    setCount(count + 1);

  }
  const [bgColor, setBgColor] = useState('white'); 
  function getRandomColor() {
    let r = 150 + Math.round(100*Math.random());
    let g = 150 + Math.round(100*Math.random());
    let b = 150 + Math.round(100*Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handlecolor() {
    setBgColor(getRandomColor()); 
  }

  return (
    <>
      <div onClick={handleclick} style={{height: '100px', width: '250px', border: '1px solid black', backgroundColor: bgColor}}>

        <ColorSwitch onChangeColor={handlecolor}/>

         <br />
         <br />
         <h2>click on the page:{count}</h2>
      </div>

    </>
  )
}

export default App
