import React from 'react'

const Lift = (props) => {
  return (
    <div>
        <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} />
      <p>Name state variable ki value inside lift: {props.name}</p>
    </div>
  )
}

export default Lift