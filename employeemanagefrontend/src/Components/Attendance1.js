import React from 'react'
import { useState } from 'react';
import "./Attendance1.css";
import {EmployeeData} from "./EmployeeData";
import * as ai from 'react-icons/ai';
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar.js";

export default function Attendance1() {
    const [searchTerm, setSearchTerm] = useState('');


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const FEmployeeData = EmployeeData.filter((item) => {
    return (
      
      item.fname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex'}}>

            <div className='Attendance-whole' >
                <div className='employeeList1'>
                    <div className='member'><center>Admittance Management</center></div>
                    <div className='edetails'>
                        <input className='searchbar' placeholder='Search' value={searchTerm} onChange={handleSearchTermChange}/>
                       
                        <div className='buttongroup'>
                          <div style={{paddingLeft:7,paddingRight:7, marginTop:10}}><bi.BiSortDown/></div>
                          <button className='sbutton'>Sort</button>
                          <div style={{paddingLeft:7,paddingRight:7, marginTop:10}}><fa.FaFilter/></div>
                          <button className='sbutton'> Filter</button>
                        </div>
                    </div>
                  </div>
                <div className='leavescroller' style={{height:440}}>
                    <table cellSpacing={0} className='table1'>
                          <thead className='tablehead'>
                          <tr className='tablehead1'>
                              <th>Id</th>
                              <th>Employee</th>
                              <th>Approver</th>
                              <th>Position</th>
                              <th>Team</th>
                              <th>Office</th>
                              <th>Department</th>
                          </tr>
                          </thead>
                          <tbody>
                              {FEmployeeData.map(item => (
                                  <tr>
                                      <td>{item.id}</td>
                                      <td>{item.fname}</td>
                                      <td>{item.approver}</td>
                                      <td>{item.position}</td>
                                      <td>{item.team}</td>
                                      <td>{item.office}</td>
                                      <td style={{ color: item.statuss === 'Logged in' ? 'green' : 'red' }}>{item.statuss}</td>
                                      <div className="hover-block">
                                        <div style={{ color: item.statuss === 'Logged in' ? 'green' : 'red' }}>Logged in: 10:00 AM</div>
                                        <div style={{ color: item.statuss === 'Logged in' ? 'green' : 'red' }}>Logged out: 6:00 PM</div>
                                        <div style={{ color: item.statuss === 'Logged in' ? 'green' : 'red' }}>Total Hours: 8:00 AM</div>
                                      </div>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
            </div>
            <div className='rightbar'>
                <div className='progress-pad'></div>
                <div style={{marginTop:-30}}>
                    <div style={{display:'flex'}} className='dateattend'>
                        <div className='enter-date'>Date</div>
                        <input className='enter-data-input'type="date" name="dateFieldName" style={{position:'relative',right:'60px',top:'20px'}}></input>
                    </div>
                    <ul className='deptlist'>
                    <li className='deptitems1'>Designing</li>
                    <li className='deptitems1'>Development</li>
                    <li className='deptitems1'>Buisness Development</li>
                    <li className='deptitems1'>Cloud Support</li>
                    <li className='deptitems1'>Finance</li>
                    <li className='deptitems1'>Human Resourse</li>
                    <li className='deptitems1'>Infrastructures</li>
                    <li className='deptitems1'>IT Services</li>
                    <li className='deptitems1'>Product development</li>
                    <li className='deptitems1'>Research</li>
                    <li className='deptitems1'>Software Testing</li>
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
  )
}
