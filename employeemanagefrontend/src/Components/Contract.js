import React from 'react';
import "./Generalinfo.css";
import axios from 'axios';
import {useState,useEffect} from "react";
export default function Contractinfo({employeeid}) {
  const[contact,setcontact]=useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/contact/${employeeid}`)
    .then(response => {
        setcontact(response.data);
        
    })
    .catch(error => {
        console.log(error);
    })
  },[employeeid]);
  if(!contact){
    return <>loading...</>
  }
    const styles = {
        column: {
          padding:'20px',
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
    <div className="personaldetails">
        <p className="heading">Contact information</p>
        <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }} className="Generalinfo1">
        <div style={styles.column}>
          <div style={styles.value}><p>LinkedIn</p><h3>{contact[0][2]}</h3></div>
          <div style={styles.value}><p>City</p><h3>{contact[0][0]}</h3></div>
          <div style={styles.value}><p>State</p><h3>{contact[0][6]}</h3></div>
          <div style={styles.value}><p>emailid</p><h3></h3></div>
        </div>
      </div>
      <div style={{ flex: 1 }} className="Generalinfo2">
        <div style={styles.column}>
          <div style={styles.value}><p>Country</p><h3>{contact[0][1]}</h3></div>
          <div style={styles.value}><p>Pincode</p><h3>{contact[0][5]}</h3></div>
          <div style={styles.value}><p>Mobile number</p><h3>{contact[0][4]}</h3></div>
          <div style={styles.value}><p>Githublink</p><h3>{contact[0][3]}</h3></div>
          </div>
      </div>  
    </div>
    </div>
    </div>
   
  )
}
