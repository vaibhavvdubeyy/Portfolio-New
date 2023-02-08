 
import React, { useState } from 'react'
import '../styles/navbar.scss'
import {FaBrain, FaBriefcase, FaFileContract, FaHome, FaServicestack, IconName } from "react-icons/fa";

const Navbar = () => {
    
    const {hover,setHover} = useState(false);
    const {hoverText,setHoverText} = useState("");
    
    const showIcons = hover ? hoverText : "";

  return (
    <>
    <div className='sidenavbg'></div>
    <div className='sidenav1'>
        
        <ul>
            <li ><a href='/Home' id='home'><div className='text'> Home</div><div className='icon'><FaHome/></div></a></li>
            <li><a href='/Project' id='project'><div className='text'> Projects</div><div className='icon'><FaBriefcase/></div></a></li>
            <li><a href='/' id='exp'><div className='text'> Experience</div><div className='icon'><FaBrain/></div></a></li>
            <li><a href='/Services' id='service'><div className='text'> Services</div><div className='icon'><FaServicestack/></div></a></li>
            <li><a href='/Contact' id='contact'><div className='text'> Contact</div><div className='icon'><FaFileContract/></div></a></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
