// Employeehome.js
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; // Import connect to access the Redux store
import Employeenavbar from './Employeenavbar';
import About from './About';
import Homecom from './Homecom';

function Employeehome() {
  // Use the 'name' prop obtained from the Redux store
  const [index, setIndex] = useState(0);
  const images = ['./images/homepage4.jpg', './images/homepage8.jpg', './images/homepage10.jpg'];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Employeenavbar/>
      <img src={images[index]} alt='Slide' style={{ width: '1300px', height: '500px', top: '50%', position: 'top 120px', position: 'static ' }} />
      <div id="about">
        <Homecom />
        <About />
        <h1>Welcome</h1> {/* Display the username obtained from the Redux store */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.login.name, // Access the 'name' state from the Redux store
  };
};

export default connect(mapStateToProps)(Employeehome);
