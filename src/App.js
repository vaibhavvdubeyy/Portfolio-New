import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import './styles/app.scss'

const App = () => {
  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Services" element={<Services />}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
