import React from 'react'

const ColorSwitch = (props) => {
  return (
    <div>
        <button onClick={e => { e.stopPropagation(); props.onChangeColor(); }}>Change Color</button>
    </div>
  )
}

export default ColorSwitch