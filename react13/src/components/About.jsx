import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate(); 
  function handleclick() {
    navigate('/dashboard');
  } 
  return (
    <div>About Page : 
      <button onClick={handleclick}> Move to Dashboard Page</button>
    </div>
  )
}

export default About