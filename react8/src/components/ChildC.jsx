import React from 'react'
import  { useContext } from 'react'

import { ThemeContext } from '../App.jsx'



const ChildC = () => {
    const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div> 
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            change theme
        </button>
    </div>
  )
}

export default ChildC