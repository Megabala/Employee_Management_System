import React from 'react'
import "./Notification.css";
import Navbar from "./Navbar";
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function Notification() {
  const[notify,setnotify]=useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/leaveget`)
    .then(response => {
        setnotify(response.data);
        
    })
    .catch(error => {
        console.log(error);
    })
  },[]);
  console.log(notify);
  if(!notify){
    return <>Loading....</>
  }

     return (
     <div className="notifypage">
     <Navbar/>
     {notify.map((notify) => (
           
     <div className="notifypage1">
     <div className="singlenotify">
    <div className="detailsperson">
    <div className="details">
     <p>Employeeid:</p>
     <p>{notify.employeeid}</p>
     </div>
    <div className="details">
     <p>EmployeeName:</p>
     <p>{notify.firstname}</p>
     </div>
    <div className="details">
     <p>Departments:</p>
     <p>{notify.department}</p>
     </div>
     </div>
    <div className="detailsperson">
    <div className="details">
     <p>StartDate:</p>
     <p>{notify.startdate}</p>
     </div>
    <div className="details">
     <p>EndDate:</p>
     <p>{notify.enddate}</p>
     </div>
     </div>
     <div className="Reason">
    <p>{notify.reason}</p>
     </div>
     <div className="accrejbut">
     <button className="acceptbutton">Accept</button>
     <button className="rejectbutton">Reject</button>
     </div>
     </div>
     </div>
       ))}
       </div>
      )
}
