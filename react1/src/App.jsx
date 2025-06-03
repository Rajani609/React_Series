import { useState } from 'react'
import UserCard from './Components/UserCard'
import rajniProfilePic from './assets/rajni_profile_pic.jpg'
import image from './assets/image.jpg'
import images2 from './assets/images2.jpg'
import './App.css'





function App() {
  

  return (
    <>
     <UserCard name="Rajni" image={rajniProfilePic} desc="Web-Developer" />
     <UserCard name="Aakash" image={image} desc="Backend-Developer"  />
     <UserCard name="Radhe-Krishna" image={images2} desc="World-Developer"  />

    </>
  )
}

export default App
