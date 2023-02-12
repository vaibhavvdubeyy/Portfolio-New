import React from 'react';
import '../styles/experience.scss'

const Experience = () => {
  return (
    <>
      <div class="exptitle">
       <h1>EXPERIENCE</h1>
    </div>
    
<div class="timeline"> 
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div class="timeline__event__icon ">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
      Nov 2022 - Present
    </div>
    <div class="timeline__event__content ">
      <div class="timeline__event__title">
        Larsen & Toubro Ltd, Developer
      </div>
      <div class="timeline__event__description">
        <p>Handling Cloud Services, Data Administration, Kubernetes Services, Docket, Data Migration.<br/>
Made the company’s Asset Management Website from scratch.<br/>
Technologies used: Microsoft Azure, Python, React, VSCode, DBMS, HTML, CSS, JavaScript, Node.js</p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>

    </div>
    <div class="timeline__event__date">
      Feb 2022 - May 2022
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Wipro Ltd, J2EE Developer Intern
      </div>
      <div class="timeline__event__description">
        <p>Worked on a project for Online Voting System, designed the Login Page and implemented User Authentication.<br/>
Technologies used: Java, MySQL, HTML, CSS, JavaScript, SpringBoot</p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div class="timeline__event__icon">
      <i class="lni-slim"></i>

    </div>
    <div class="timeline__event__date">
      Sept 2020 - Nov 2020
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        TNC Aviation Ltd, SEO Intern
      </div>
      <div class="timeline__event__description">
        <p>Worked on ranking the website on different browsers and maintaining webpages.<br/>Added support in maintaining Webpages for better response.</p>
      </div>

    </div>
  </div>
  <div class="timeline__event animated fadeInUp timeline__event--type1">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
      Jan 2020 - May 2020
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Sky-Fi labs Ltd, ML Developer Intern
      </div>
      <div class="timeline__event__description">
        <p>Worked on the project of House Price Prediction & Stock Price Prediction using Linear Regression Models and Support Vector Classifier.<br/>
Added support on other projects where I modified and implemented Machine Learning Algorithms.<br/>
Technologies Used: Python, Machine Learning Algorithms, Linear Regression, Support Vector Classifier, Anaconda Navigator.
</p>
      </div>
    </div>
  </div>

</div>
    </>
  );
}

export default Experience;
