
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import About from './About';
import Homecom from './Homecom';

function Homepage({name}) {
  const [index, setIndex] = useState(0);
  const images = ['./images/homepage4.jpg', './images/homepage8.jpg','./images/homepage10.jpg'];
    
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
    
  return (
    <>
      <Navbar />
      <img src={images[index]} alt='Slide' style={{ width: '1300px', height: '500px', top: '50%', position: 'top 120px', position: 'static ' }} />
      <div id="about">
        <Homecom />
        <About />
        <p>Welcome, {name}</p> 
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.login.name,
  };
};

export default connect(mapStateToProps)(Homepage);
