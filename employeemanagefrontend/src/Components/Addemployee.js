import React from 'react'
import "./Addemployee.css";
import {useState} from "react";
import axios from "axios";
export default function Addemployee() {
   const[fname,setfname]=useState('');
   const[lname,setlname]=useState('');
   const[dob,setdob]=useState('');
   const[gender,setgender]=useState('');
   const[mstatus,setmstatus]=useState('');
   const[emailid,setemailid]=useState('');
   const[password,setpassword]=useState('');
   const[city,setcity]=useState('');
   const[country,setcountry]=useState('');
   const[state,setstate]=useState('');
   const[github,setgithub]=useState('');
   const[linkedin,setlinkedin]=useState('');
   const[mnumber,setmnumber]=useState('');
   const[pincode,setpincode]=useState('');
   const[joindate,setjoindate]=useState('');
   const[shifttime,setshifttime]=useState('');
   const[depart,setdepart]=useState('');
   const[manager,setmanager]=useState('');
   const[role,setrole]=useState('');
   const[salary,setsalary]=useState(0);
   const[year,setyear]=useState('');
   const[achievements,setachievements]=useState(0);
   const[cgpa,setcgpa]=useState('');
   const[areainterest,setareainterest]=useState('');
   const[experience,setexperience]=useState('');
   const[institution,setinstitution]=useState('');
   const[degree,setdegree]=useState('');
   const[branch,setbranch]=useState('');
   const[projects,setprojects]=useState(0);
   const[skills,setskills]=useState('');
   const[employeeid,setemployeeid]=useState(0);
   const handlesubmit = (e) => {
   e.preventDefault();
   const empdata = {
       "employeeid":employeeid,
      "firstname":fname ,
      "lastname": lname,
      "dateofbirth":dob,
      "gender": gender,
      "maritalstatus": mstatus,
      "emailid": emailid ,
      "password":password,
      "contact": {
          "city": city,
          "country":country ,
          "state": state,
          "githublink": github,
          "linkedinlink": linkedin,
          "mobilenumber":mnumber,
          "pincode": pincode
      },
      "general": {
          "joindate":joindate,
          "shifttime": shifttime,
          "department": depart,
          "manager": manager,
          "role": role,
          "salary": salary
      },
      "acadamic": {
          "year": year,
          "cgpa": cgpa,
          "areaofinterest": areainterest,
          "experience": experience,
          "institution": institution,
          "degree": degree,
          "branch": branch,
          "projects": projects,
          "achievements": achievements,
          "skills": skills
      }
    };
axios.post("http://localhost:8080/",empdata);
window.location.reload();
console.log('Form submitted');
console.log(mstatus);
console.log(gender);
}
  return (
    <div className="registerform">
    <form className="registerform1"onSubmit={handlesubmit}>
    <fieldset className="fieldregister">
    <legend className="fieldlegend">Personaldetails</legend>
    <div className="row">
    <label for="FirstName">FirstName:</label>
    <input type="text" id="FirstName" name="FirstName" placeholder="FirstName" value={fname} onChange={(e) => setfname( e.target.value)}/><br/>
    <label for="LastName">LastName:</label>
    <input type="text" id="LastName" name="LastName" placeholder="LastName" value={lname} onChange={(e) => setlname(e.target.value)}/><br/>
    <label for="Gender">Gender:</label>
    <div className="selectgender">
    <select id="Gender" name="Gender" value={gender} onChange={(e) => setgender( e.target.value)}>
    <option value="Female">Female</option>
    <option value="Male">Male</option>
    </select>
   </div>
   </div>
   <div className="row">
  <label for="Date of Birth">Date of Birth:</label>
  <input type="date" id="Date of Birth" name="Date of Birth" placeholder="Date of Birth" value={dob} onChange={(e) => setdob( e.target.value)}/><br/>
  <label for="password">Password:</label>
  <input type="text" id="password" name="password" placeholder="password" value={password} onChange={(e) => setpassword( e.target.value)}/><br/>
  <label for="confirmpass">Confirmpassword:</label>
  <input type="text" id="confirmpass" name="confirmpass" placeholder="confirmpass"/><br/>
   </div>
   <label for="MaritalStatus">MaritalStatus:</label>
   <div className="selectgender">
    <select id="marital" name="marital" value={mstatus} onChange={(e) => setmstatus( e.target.value)}>
    <option value="Married">Married</option>
    <option value="Unmarried">Unmarried</option>
    </select>
   </div>
   <label for="emailid">emailid:</label>
  <input type="text" id="emailid" name="emailid" placeholder="emailid" value={emailid} onChange={(e) => setemailid( e.target.value)}/><br/>
   <label for="employeeid">Employeeid:</label>
  <input type="number" id="employeeid" name="employeeid" placeholder="employeeid" value={employeeid} onChange={(e) => setemployeeid( e.target.value)}/><br/>
   </fieldset>
    <fieldset className="fieldregister">
    <legend className="fieldlegend">Contact Info</legend>
    <div className="row">
    <label for="City">City</label>
    <input type="text" id="City" name="City" placeholder="City" value={city} onChange={(e) => setcity( e.target.value)}/><br/>
    <label for="State">State:</label>
    <input type="text" id="State" name="State" placeholder="State" value={state} onChange={(e) => setstate( e.target.value)}/><br/><br/><br></br>
    <label for="ZipCode">ZipCode:</label>
    <input type="text" id="ZipCode:" name="ZipCode:" placeholder="ZipCode:"value={pincode} onChange={(e) => setpincode( e.target.value)}/><br/>
    </div>
    <div className="row">
    <label for="Country">Country:</label>
    <input type="text" id="Country" name="Country" placeholder="Country" value={country} onChange={(e) => setcountry( e.target.value)}/><br/>
    <label for="MobileNumber">MobileNumber:</label>
    <input type="text" id="MobileNumber" name="MobileNumber" placeholder="MobileNumber" value={mnumber} onChange={(e) => setmnumber( e.target.value)}/><br/>
    <label for="LinkedIn">LinkedIn:</label>
    <input type="text" id="LinkedIn" name="LinkedIn" placeholder="LinkedIn" value={linkedin} onChange={(e) => setlinkedin( e.target.value)}/><br/>
    </div>
    <div className="row">
    <label for="GitHub">GitHub:</label>
    <input type="text" id="GitHub" name="GitHub" placeholder="GitHub" value={github} onChange={(e) => setgithub( e.target.value)}/><br/>
    </div>
  </fieldset>
  <fieldset className="fieldregister">
    <legend className="fieldlegend">General Info</legend>
    <div className="row">
    <label for="joindate">Joining date:</label>
    <input type="text" id="joindate" name="joindate" placeholder="joindate" value={joindate} onChange={(e) => setjoindate( e.target.value)}/><br/>
    <label for="depart">Department:</label>
    <input type="text" id="depart" name="depart" placeholder="depart" value={depart} onChange={(e) => setdepart(e.target.value)}/><br/>
    <label for="shifttime">Shifttime:</label>
    <input type="text" id="shifttime" name="shifttime" placeholder="shifttime" value={shifttime} onChange={(e) => setshifttime( e.target.value)}/><br/><br/><br></br>
    </div>
    <div className="row">
    <label for="manager">Manager:</label>
    <input type="text" id="manager" name="manager" placeholder="manager" value={manager} onChange={(e) => setmanager( e.target.value)}/><br/>
    <label for="salary">Salary:</label>
    <input type="number" id="salary" name="salary" placeholder="salary" value={salary} onChange={(e) => setsalary( e.target.value)}/><br/>
    <label for="role">Role:</label>
    <input type="text" id="role" name="role" placeholder="role" value={role} onChange={(e) => setrole( e.target.value)}/><br/>
    </div>
    </fieldset>
    <fieldset className="fieldregister">
    <legend className="fieldlegend">Acadamic Info</legend>
    <div className="row">
    <label for="year">Year</label>
    <input type="text" id="year" name="year" placeholder="year" value={year} onChange={(e) => setyear( e.target.value)} /><br/>
    <label for="CGPA">CGPA:</label>
    <input type="text" id="CGPA" name="CGPA" placeholder="CGPA" value={cgpa} onChange={(e) => setcgpa( e.target.value)}/><br/>
    <label for="Institution">Institution</label>
    <input type="text" id="Institution" name="Institution" placeholder="Institution" value={institution} onChange={(e) => setinstitution( e.target.value)}/><br/>
    </div>
    <div className="row">
    <label for="Area of interest">Area of interest:</label>
    <input type="text" id="Area of interest" name="Area of interest" placeholder="Area of interest" value={areainterest} onChange={(e) => setareainterest( e.target.value) }/><br/>
    <label for="Experience">Experience:</label>
    <input type="text" id="Experience" name="Experience" placeholder="Experience" value={experience} onChange={(e) => setexperience( e.target.value) }  /><br/>
    <label for="skills">Skills Known:</label>
    <input type="text" id="skills" name="skills" placeholder="skills" value={skills} onChange={(e) => setskills( e.target.value) }/><br/>
    </div>
    <div className="row">
    <label for="Degree">Degree:</label>
    <input type="text" id="Degree" name="Degree" placeholder="Degree" value={degree} onChange={(e) => setdegree( e.target.value) }/><br/>
    <label for="Achievement">Achievement:</label>
    <input type="number" id="Achievement" name="Achievement" placeholder="Achievement" value={achievements} onChange={(e) => setachievements( e.target.value) }/><br/>
    <label for="Branch">Branch:</label>
    <input type="text" id="Branch" name="Branch" placeholder="Branch"value={branch} onChange={(e) => setbranch( e.target.value) }/><br/>
    </div>
    <div className="row">
    <label for="projects">projects</label>
    <input type="number" id="projects" name="projects" placeholder="projects"value={projects} onChange={(e) => setprojects( e.target.value) }/><br/>
    </div>
   </fieldset>
   <button>Submit</button>
    </form>
    </div>
  )
}
