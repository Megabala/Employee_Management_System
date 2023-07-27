import React, { useState, useEffect } from 'react';
import "./Generalinfo.css";
import axios from 'axios';

export default function Generalinfo({ employeeid }) {
  const [dataprofile, setdataprofile] = useState(null); // Change initial state to null
  const[personal,setpersonal]=useState(null);

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:8080/employees/${employeeid}`),
      axios.get(`http://localhost:8080/personal/${employeeid}`)
    ])
      .then(([profileResponse, personalResponse]) => {
        setdataprofile(profileResponse.data);
        setpersonal(personalResponse.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [employeeid]);

  if (!dataprofile || !personal) {
    return <div>Loading...</div>;
  }
 
  const styles = {
    column: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between',
    },
    value: {
      padding: '3px',
      marginBottom: '10px',
    },
  };

  return (
    <div className="Generalinfo">
      <p className="heading">General Information</p>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }} className="Generalinfo1">
          <div style={styles.column}>
            <div style={styles.value}><p>Joining date</p><h3>{dataprofile[0][1]}</h3></div>
            <div style={styles.value}><p>Department</p><h3>{dataprofile[0][3]}</h3></div>
            <div style={styles.value}><p>Role</p><h3>{dataprofile[0][5]}</h3></div>
          </div>
        </div>
        <div style={{ flex: 1 }} className="Generalinfo2">
          <div style={styles.column}>
            <div style={styles.value}><p>Shift Timing</p><h3>{dataprofile[0][2]}</h3></div>
            <div style={styles.value}><p>Manager</p><h3>{dataprofile[0][4]}</h3></div>
            <div style={styles.value}><p>Salary</p><h3>{dataprofile[0][6]}</h3></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="personaldetails">
        <p className="heading">Personal Information</p>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }} className="Generalinfo1">
            <div style={styles.column}>
              <div style={styles.value}><p>FirstName</p><h3>{personal[0][0]}</h3></div>
              <div style={styles.value}><p>LastName</p><h3>{personal[0][1]}</h3></div>
              <div style={styles.value}><p>DOB</p><h3>{personal[0][5]}</h3></div>
            </div>
          </div>
          <div style={{ flex: 1 }} className="Generalinfo2">
            <div style={styles.column}>
              <div style={styles.value}><p>Marital Status</p><h3>{personal[0][3]}</h3></div>
              <div style={styles.value}><p>Gender</p><h3>{personal[0][2]}</h3></div>
              <div style={styles.value}><p>EmployeeId</p><h3>{personal[0][4]}</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
