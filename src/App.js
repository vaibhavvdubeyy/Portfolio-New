import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'
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
      <Route path="/Project" element={<Project />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
