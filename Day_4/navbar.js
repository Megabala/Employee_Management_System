import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
// import Dropdown from "./Dropdown";

import {useState} from "react";
export default function Navbar(){
    const[drop,setdrop]=useState(false);
    return(
        <div>
        <div className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
        <li> <a href="/ManageEmployee">ManageEmployee</a></li>
        <li> <a href="/AttendanceMangement">Attendance</a></li>
        <li> <a href="/AttendanceMangement">Assign Task</a></li>
        <li> <a href="/AttendanceMangement">About us</a></li>
        <li> <a href="/AttendanceMangement">Contact us</a></li>
        </ul>
        </div>
        </div>
    )
    
}