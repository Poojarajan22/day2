import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Navbar />
      <h1>hello</h1>
      <h2>welcome to home</h2>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tab" element={<Tab />} />
      </Routes>
     
    </>
  )
}
  
  


export default App
