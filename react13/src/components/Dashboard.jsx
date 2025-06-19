import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  function handleclick() {
    navigate('/');
  }
  return (
    <div>Dashboard Page : 
      <button onClick={handleclick}> Move to Home Page</button>

      <Outlet/>
    </div>
  )
}

export default Dashboard