import React, { useState } from 'react';
import './Employee.css'; 
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import {useEffect} from 'react';

import axios from 'axios';
const Employee = ({deptname,setemployeeid}) => {
  const employees=[
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 5, name: 'John Doe' },
    { id: 6, name: 'Jane Smith' },
    { id: 7, name: 'Alice Johnson' },
    { id: 8, name: 'John Doe' },
    { id: 9, name: 'Jane Smith' },
    { id: 10, name: 'Alice Johnson' },
    { id: 11, name: 'John Doe' },
    { id: 12, name: 'Jane Smith' },
    { id: 13, name: 'Alice Johnson' }
  ];
  const[data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/${deptname}`)
    .then(response => {
        setData(response.data);
        
    })
    .catch(error => {
        console.log(error);
    })
  },[deptname]);
  const handleDeptItemClick = (dept_id) => {
    axios.delete(`http://localhost:8080/delete/${dept_id}`)
    window.location.reload()

  };
  const [task,settask]=useState(false);
  const handletask = () => {
    settask(!task);
  };
  
  const[startdate,setstartdate]=useState("");
  const[enddate,setenddate]=useState("");
  const[employeeId,setemployeeId]=useState(0);
  const[projectname,setprojectname]=useState("");
 const handlesubmit = (e) => {
    e.preventDefault();
    const assigntask={
      "employeeid":employeeId,
      "startdate":startdate,
      "enddate":enddate,
      "projectname":projectname
     };
     axios.post("http://localhost:8080/task",assigntask);
   };
  return (
    <div>
      <h2 className="employeehead">Employee Table</h2>
      <table className="employeetable">
      <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Assign Task</th>
            <th>View</th>
        </tr>
       
        <tbody>
          {data.map((employee) => (
            <tr key={employee.employeeid}>
              <td>{employee.employeeid}</td>
              <td>{employee.firstname}</td>
              <td>
                <button><Link to="/Updateprofile">Edit</Link></button>
              </td>
              <td>
                <button onClick={() => handleDeptItemClick (employee.employeeid)}>Delete</button>
              </td>
              <td>
                <button onClick={handletask}>Assign Task</button>
              </td>
              <td>
                <button><Link to="/EmployeeProfile" onClick={() => setemployeeid(employee.employeeid)}>View</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    {task &&  
    <div className="form-overlay">
      <div classame ="form-container">
        <center>
      <h2>Form with Attachments</h2>
      <div className="formtask">
      <form onSubmit={handlesubmit} className="Taskform">
      <ImCross style={{color:'red',position:'relative',left:'240px',bottom:'15px',padding:'4px',fontSize:'20px' }} onClick={handletask} />
        <div>
        <label>Assigned Date:</label>
        <input type="date" value={startdate} onChange={(e) => setstartdate( e.target.value)} />
        </div>
        <br/>
        <div>
        <label>EmployeeId:</label>
          <input type="number" value={employeeId}  onChange={(e) => setemployeeId( e.target.value)}/>
        </div>
        <br/>
        <div>
        <label>Project Name:</label>
        <input type="text" value={projectname} onChange={(e) => setprojectname( e.target.value)}/>
        </div>
        <br />
        <div>
        <label>Due Date:</label>
          <input type="date" value={enddate} onChange={(e) => setenddate( e.target.value)} />
        </div>
        <br/>
        
        <br />
        <button type="submit" className="tasksubmit">Submit</button>
      </form>
      </div>
        </center>
    </div> 
    </div>
    }
    </div>
    
    
  );
};

export default Employee;
