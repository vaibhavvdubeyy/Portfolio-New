 
import React from 'react'
import '../styles/navbar.scss'
import {FaBrain, FaBriefcase, FaFileContract, FaHome, FaServicestack } from "react-icons/fa";

const Navbar = () => {
    
   

  return (
    <>
    <div className='sidenavbg'></div>
    <div className='sidenav1'>
        
        <ul>
            <li ><a href='/Home' id='home'><div className='text'> Home</div><div className='icon'><FaHome/></div></a></li>
            <li><a href='/Project' id='project'><div className='text'> Projects</div><div className='icon'><FaBriefcase/></div></a></li>
            <li><a href='/Experience' id='exp'><div className='text'> Experience</div><div className='icon'><FaBrain/></div></a></li>
            <li><a href='/Services' id='service'><div className='text'> Services</div><div className='icon'><FaServicestack/></div></a></li>
            <li><a href='/Contact' id='contact'><div className='text'> Contact</div><div className='icon'><FaFileContract/></div></a></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
