import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button>{props.children}</button>
      <button onClick={props.handleClick}>
        {props.text}
      </button>

    </div>
  )
}

export default Button