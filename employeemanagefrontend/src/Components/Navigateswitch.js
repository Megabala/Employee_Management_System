import React from 'react';
import { Link } from "react-router-dom";
import './Navigateswitch.css'; // Import a CSS file for custom styles

export default function Navigateswitch() {
  return (
    <div className="card">
      <button className="button"><Link to="/adminlogin">Admin</Link></button>  
      <button className="button"><Link to="/employeelogin">Employee</Link></button> 
    </div>
  )
}
