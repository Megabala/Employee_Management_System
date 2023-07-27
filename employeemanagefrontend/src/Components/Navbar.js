import React from "react";
import "./Navbar.css";
import {Link as Layer} from "react-scroll";
import {Link } from "react-router-dom";
export default function Navbar(){
    return(
    <div>
    <div className="nav">
    <img src="./images/logoimage4.png" style={{width:'130px'}}></img>
    <ul>
    <li>
    <div className="dropdown">
    <Link to="/signup" class="dropbtn">create account</Link>
    {/* <div class="dropdown-content">
    <div className="dropdownitem"><Link to="/Addemployee">AddEmployee</Link></div>
    <div className="dropdownitem"><Link to ="#">RemoveEmployee</Link></div>
    <div className="dropdownitem"><Link to="#">UpdateEmployee</Link></div>
    </div> */}
    </div>
    </li>
        <li> <Link to="/Attendance">Attendance</Link></li>
        <li><Link to="/Departments">Departments</Link></li>
        <li><Link to="/Notification">Notification</Link></li>
        </ul>
        <div className="aboutmove">
        <Layer to="about" smooth={true} offset={200} duration={500}>About us</Layer>
        </div>
        <Link to="/adminlogin"><button className="logoutbutton">logout</button></Link>
        </div>
        </div>
    )
    
}