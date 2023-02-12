import React from 'react'
import '../styles/home.scss'
import { SocialIcon } from 'react-social-icons';
import profile from '../assets/PSP.png';

const Home = () => {
  return (
    <>
      <div className='heading'>

        <h1>I'm Vaibhav </h1>
        <h2>~ Full Stack Developer</h2>
      </div>
      <div className='photo'>
        <img src={profile} id='image' alt="profile" />
      </div>

      <div className='btn'>
        <button><a href='https://docs.google.com/document/d/1C1zDWVlaVZruWZRgj0pcy9rnqOvAchICHK1jn6ExQIk/edit?usp=sharing'> Hire Me!</a></button>
      </div>

      <div className='social '>
        <SocialIcon url="https://www.linkedin.com/in/vaibhav-dubey-3814a7184/" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon url="https://www.youtube.com/channel/UCltUAcF3lrhGnqjqe81QE_w" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon url="https://github.com/vaibhavvdubeyy" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon url="https://www.instagram.com/vaibhavv_dubeyy/" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div class="typewriter">
        <h1>Get all your Tech & Finance related Service at one place..</h1>
      </div>
     
    </>
  )
}

export default Home
