import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './styles/app.scss'

const App = () => {
  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
      <Route path="/Home" element={<Home />}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
