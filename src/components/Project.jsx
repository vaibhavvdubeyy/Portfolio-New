import React from 'react'

import '../styles/project.scss'

const Project = () => {
  return (
    <>
    <div className="name">
      <h1>PROJECTS</h1>
    </div>
     <div class="container">
      
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>01</h2>
        <h3>Terrorism & Fake News Detection</h3>
        <p>It was a machine learning based project which was implemented in social media website to keep a check on terror and fake news activities.</p>
        <a href="https://github.com/vaibhavvdubeyy/Terrorism-and-fake-news-detection">Source Code</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>Portfolio Website</h3>
        <p>Personal Portfolio website based on React.js and Node.js to showcase yourself.</p>
        <a href="#">Check Out</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Live News Website</h3>
        <p>It is a website based on React.js and Node.js that uses NEWS API to fetch and show current news.</p>
        <a href="#">Check Out</a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Project
