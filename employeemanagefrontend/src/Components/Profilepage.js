import React from 'react';
import "./Profilepage.css";
import Generalinfo from "./Generalinfo";
import Contract from "./Contract";
import Acadamicinfo from "./Acadamicinfo";
import Document from "./Document";
import Task from "./Task";
import { useState,useEffect} from 'react';

function EmployeeProfile({employeeid}) {
  const empid=employeeid;
  const[Render,setRender]=useState();
  console.log(empid);
 
 return (
      <div className="profilepagebody">
        <div className="profilepage">
      <div className="profileContainer" style={{ backgroundImage: `url('./images/profileback1.jpg')`, backgroundSize: 'cover', height: '200px'}}>
        <div className="profileImageStyle">
          <img
            src="./images/aboutus7.jpg"
            alt="Profile Image"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        </div>
        </div>
        <div className="navprofile">
        <ul>
        <li onClick={() => setRender(<Generalinfo employeeid={empid}/>)}>General info</li>
        <li onClick={() => setRender(<Contract employeeid={empid}/>)}>Contract info</li>
        <li onClick={() => setRender(<Document/>)}> Document</li>
        <li onClick={() => setRender(<Acadamicinfo employeeid={empid}/>)}>Acadamic info</li>
        <li onClick={() => setRender(<Task employeeid={empid}/>)}>Tasks</li>
      
        </ul>
        </div>
        <div>
          
         {/* <BrowserRouter>
        <Routes>
        <Route path="/generalinfo" element={<Generalinfo/>}></Route>
        </Routes>
      </BrowserRouter> */}
      {Render}
        
        </div>
        
        </div>
        </div>
      
        
    );
  }


export default EmployeeProfile;
