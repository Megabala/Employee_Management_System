import React from 'react'
import './Task.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function Task({employeeid}) {
  const[taskemp,settaskemp]=useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/taskget/${employeeid}`)
    .then(response => {
        settaskemp(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    },[employeeid]);
    console.log(taskemp);
    if(!taskemp){
      return<>Loading....</>
    }
  return (
    <div>
    <div className='Grid'>
    <div className="Grid-1">
    <div className="taskheadingcontainer">
    <h3 className="taskheading">Task Assigned</h3></div>
    <table className="task-table">
    <tr>
        <th>ProjectName</th>
        <th>AssignedDate</th>
        <th>DueTime</th>
    </tr>
    {taskemp.map((taskemployee) => (
      <tr>
         <td>{taskemployee.projectname}</td>
         <td>{taskemployee.startdate}</td>
         <td>{taskemployee.enddate}</td>
         </tr>
          ))}
    
    </table> 
    </div>
    </div>
    </div>   
    
    
  )
}
