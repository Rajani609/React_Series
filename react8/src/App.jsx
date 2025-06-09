
import { createContext, useState } from 'react';


import './App.css'
import ChildA from './components/ChildA.jsx';


const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');


  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="div" id='container' style={{backgroundColor: theme === 'light' ? ' rgb(254, 254, 174)' : 'black'}}> 
        <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
export { ThemeContext }
