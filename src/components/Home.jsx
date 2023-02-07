import React from 'react'
import '../styles/home.scss'
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  return (
    <>
    <div className='heading'>
    <h1>I'm Vaibhav </h1>
    <h2>Web Developer</h2>
    </div>
    <div className='btn'>
        <button>RESUME</button>
    </div>
    <div className='social '>
     <SocialIcon url="https://www.linkedin.com/in/vaibhav-dubey-3814a7184/" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://www.youtube.com/channel/UCltUAcF3lrhGnqjqe81QE_w" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://github.com/vaibhavvdubeyy" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://www.instagram.com/vaibhavv_dubeyy/" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </>
  )
}

export default Home
