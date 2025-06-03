import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <>
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
        {!isLoggedIn && <LoginBtn />}
      </div>
    </>
  )

  // if(isLoggedIn) {
  //   return (
  //     <>
  //       <LogoutBtn />
  //     </>
  //   )
  // }
  // else{
  //   return (
  //     <>
  //       <LoginBtn />
  //     </>
  //   )
  // }

  // return (
  //   <>
  //     {/* {isLoggedIn ? <LogoutBtn /> : <LoginBtn />} */}
  //   </>
  // )
}

export default App
