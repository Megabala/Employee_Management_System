import React from 'react';
import "./Generalinfo.css";
import axios from 'axios';
import {useState,useEffect} from "react";
export default function Acadamicinfo({employeeid}) {
  const[acadamic,setacadamic]=useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/acadamic/${employeeid}`)
    .then(response => {
        setacadamic(response.data);
        
    })
    .catch(error => {
        console.log(error);
    })
  },[employeeid]);
  if(!acadamic){
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
        <p className="heading">Educational information</p>
        <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }} className="Generalinfo1">
        <div style={styles.column}>
          <div style={styles.value}><p>Year of passed out</p><h3>{acadamic[0][9]}</h3></div>
          <div style={styles.value}><p>Institution</p><h3>{acadamic[0][6]}</h3></div>
          <div style={styles.value}><p>Experience</p><h3>{acadamic[0][5]}</h3></div>
          <div style={styles.value}><p>Degree</p><h3>{acadamic[0][4]}</h3></div>
          <div style={styles.value}><p>Branch</p><h3>{acadamic[0][2]}</h3></div>
          
        </div>
      </div>
      <div style={{ flex: 1 }} className="Generalinfo2">
        <div style={styles.column}>
          <div style={styles.value}><p>CGPA</p><h3>{acadamic[0][3]}</h3></div>
          <div style={styles.value}><p>Area of Interest</p><h3>{acadamic[0][1]}</h3></div>
          <div style={styles.value}><p>Skills Known</p><h3>{acadamic[0][8]}</h3></div>
          <div style={styles.value}><p>Acheievements</p><h3>{acadamic[0][0]}</h3></div>
          <div style={styles.value}><p>Projects Completed</p><h3>{acadamic[0][7]}</h3></div>
        </div>
      </div>
    </div>
        
    </div>
    

  )
}
