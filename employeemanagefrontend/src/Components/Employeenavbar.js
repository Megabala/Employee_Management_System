import React from "react";
import "./Navbar.css";
import {Link as Layer} from "react-scroll";
import {Link } from "react-router-dom";
export default function Employeenavbar(){
   
    return(
    <div>
    <div className="nav">
    <img src="./images/logoimage4.png" style={{width:'130px'}}></img>
    <ul>
    <li>
    <div className="dropdown">
   
  
    </div>
    </li>
        <li> <Link to= "/profilepage">Profile</Link></li>
        <li><Link to="/Departments">Workspace</Link></li>
        <li><Link to="/Notification">Notification</Link></li>
        <li><Link to="/leaveform">Leaveform</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        </ul>
        <div className="aboutmove">
        <Layer to="about" smooth={true} offset={200} duration={500}>About us</Layer>
        </div>
        <h3 style={{position:'relative',right:'-60px'}}>Mega</h3>
        <Link to="/employeelogin"><button className="logoutbutton">logout</button></Link>
        </div>
        </div>
    )
    
}