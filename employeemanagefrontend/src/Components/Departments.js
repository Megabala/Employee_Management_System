import React from 'react';
import './Departments.css';
import {Link} from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import {useState,useEffect} from "react";
import Navbar from "./Navbar";
const images = [
  {
    src: './images/dept6.jpg',
    text: 'DESIGNING',
  },
  {
    src: './images/dept7.jpg',
    text: 'DEVELOPMENT',
  },
  {
    src: './images/dept8.jpg',
    text: 'INTEGRATION',
  },
 {
    src: './images/dept9.jpg',
    text: 'TESTING',
  },
  {
    src: './images/dept10.png',
    text: 'DEPLOYING',
  },
  {
    src: './images/dept11.jpg',
    text: 'MAINTAINENCE',
  }
 
];
  

const Departments = ({setdept}) => {
    const [index1, setIndex1] = useState(0);
    const imagesback = ['./images/dept5.jpg', './images/dept3.jpg','./images/dept4.jpg'];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex1(prevIndex => (prevIndex + 1) % imagesback.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
  return (
    <>
    <Navbar/>
    <div>
    <div className="text-container">
    {/* <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgb(0, 0, 0)',
            background:'rgba(0, 0, 0, 0.8)' ,
            padding: '10px',
            borderRadius: '4px',
            width:'70%',
            color:'white'

          }}
        >
        <input type="text" style={{width:'800px', height:'40px'}}></input>
       <AiOutlineSearch style={{fontSize: '50px' ,position:'relative',left:5,top:25}}></AiOutlineSearch>
       </div> */}
    </div>
    <img src={imagesback[index1]} alt='Slide' style={{ width: '1300px', height: '500px', top: '50%', position: 'top 120px',position:'static '}} />
    
    </div>
    <div className="departments">
    <div className="departmentcontainer">
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image.src} alt={image.text} style={{width:'250px',height:'150px'}}/>
          <br/>
          <h3>{image.text}</h3>
          <Link to="/Employee" className="btn"onClick={() => setdept(image.text)}>View Employee</Link>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Departments;
