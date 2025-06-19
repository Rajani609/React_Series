import { useState } from 'react'

import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Nav from './components/nav'
import Param from './components/Param'
import Courses from './components/Courses'
import Mocktest from './components/Mocktest'
import Report from './components/Report'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Home/>
        <Nav/>
      </div>
    },
    {
      path: '/about',
      element: <div>
        <About/>
        <Nav/>
      </div>
    },
    {
      path: '/dashboard',
      element: <div>
        <Dashboard/>
        <Nav/>
      </div>,
      children:[
        {
          path: 'courses',
          element: <Courses/>
        },
        {
          path: 'mock-test',
          element: <Mocktest/>
        },
        {
          path: 'report',
          element:<Report/>
        }
      ]
    },
    {
      path:'/student/:id',
      element:<div>
        <Param/>
        <Nav/>
      </div>
    }
  ]
)

function App() {
  

  return (
    <>
    
      <RouterProvider router={router} />
       
    </>
  )
}

export default App
