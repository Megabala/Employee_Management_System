import React from 'react'
import "./About.css";
function About() {
  return (
    <div>
    <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
</div>

 <h2 style={{textAlign:'center'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="./images/aboutus6.jpg" alt="Jane" style={{padding:'50px'}}></img>
      <div className="container">
        <h2>Aana</h2>
        <p className="title">CEO & Founder</p>
        <p>Great leadership skills</p>
        <p>Aana@example.com</p>
        </div>
        <p><button className="button">Contact</button></p>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="./images/aboutus5.jpg" alt="Mike" style={{padding:'50px'}}></img>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Great Mentorship skills</p>
        <p>mike@example.com</p>
      </div>
        <p><button className="button">Contact</button></p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src="./images/aboutus7.jpg" alt="John" style={{padding:'55px'}}></img>
      <div className="container">
        <h2>Angel deny</h2>
        <p className="title">Designer</p>
        <p>An young budding Inspiration</p>
        <p>angeldeny@example.com</p>
        </div>
        <p><button className="button">Contact</button></p>
    </div>
  </div>
</div> 
    </div> 
  )
}

export default About