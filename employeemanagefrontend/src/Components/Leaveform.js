import React from 'react'
import "./Leaveform.css";
import {useState} from 'react';
import axios from 'axios';
export default function Leaveform() {
  const[firstname,setfirstname]=useState("");
  const[lastname,setlastname]=useState(""); 
  const[depart,setdepart]=useState("");
  const[startdate,setstartdate]=useState("");
  const[enddate,setenddate]=useState("");
  const[reason,setreason]=useState("");
  const[employeeid,setemployeeid]=useState(0);
  const handlesubmit = (e) => {
    e.preventDefault();
    const leave={
    "employeeid":employeeid,
    "startdate":startdate,
    "enddate":enddate,
    "reason":reason,
    "firstname":firstname,
     "lastname":lastname,
     "department":depart
     };
     axios.post("http://localhost:8080/leave",leave);
   };
   return (
    <div className="leaveform">
    <div className="leaveform1">
    <form onSubmit={handlesubmit}>
    <div className="leave-input">
    <label for="firstname">Firstname:</label>
    <input type="text" id="firstname" placeholder="firstname" value={firstname} onChange={(e) => setfirstname( e.target.value)}></input>
    </div>
    <div className="leave-input">
    <label for="lastname">Lastname:</label>
    <input type="text" id="lastname" placeholder="lastname" value={lastname} onChange={(e) => setlastname( e.target.value)}></input>
    </div>
    <div className="leave-input">
    <label for="deptname">Department:</label>
    <input type="text" id="deptname" placeholder="deptname" value={depart} onChange={(e) => setdepart( e.target.value)}></input>
    </div>
    <div className="leave-input">
    <label for="startdate">Startdate:</label>
    <input type="date" id="startdate" placeholder="startdate" value={startdate} onChange={(e) => setstartdate( e.target.value)}></input>
    </div>
    <div className="leave-input">
    <label for="enddate">Enddate:</label>
    <input type="date" id="enddate" placeholder="enddate" value={enddate} onChange={(e) => setenddate( e.target.value)}></input>
    </div>
    <div className="leave-input">
    <label for="reason">Reason:</label>
    <input type="textarea" id="reason" placeholder="reason" value={reason} onChange={(e) => setreason( e.target.value)}></input>
    </div>
    <div className="leave-input">
    <label for="employeeid">EmployeeId:</label>
    <input type="number" id="employeeid" placeholder="employeeid" value={employeeid} onChange={(e) => setemployeeid( e.target.value)}></input>
    </div>
    <div className="leavebtn">
    <button>SUBMIT</button>
    </div>
    </form>
   
    </div>
    <div></div>
    </div>
  )
}
