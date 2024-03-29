import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif`',
    backgroundImage:`url("./images/homepage4.jpg")`
  },
  login: {
    width: '330px',
    padding: '40px',
    borderRadius: '4px',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#33bbff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'80px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
  },
};

function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
  setempid
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));

      window.alert("Successfully Logged In");

      // Assuming the response.data contains the user's name after successful login
      setName(response.data.name);

      navigate("/homeemployee");
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };
  
  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>
         
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
           </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Employeeid:</label>
            <input
              style={styles.input}
              type="number"
              name="empid"
              placeholder="Enter your employeeid"
              onChange={(e)=>setempid(e.target.value)}
              required
            />
           </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username:</label>
            <input
              style={styles.input}
              type="text"
              name="username"
              value={name} 
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button style={styles.button} type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate(`/homeemployee`)}
        
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);