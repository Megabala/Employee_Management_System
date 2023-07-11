import React from "react";
import {useState} from "react";
import "./login.css";
export default function Login(){
    const [password, setPassword] = useState('');
    const[errors,setErrors]=useState(' ');
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    const validateForm = () => {

        const errors = {};
        if (!password) {
            errors.password = 'Please enter a password.';
          } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long.';

          }
            setErrors(errors);

    return Object.keys(errors).length === 0;
          
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Perform login logic here
          console.log('Login successful');
        }
      };

    return(
        
        <div>
        <form onSubmit={handleSubmit}>
        <div className="loginimage" style={{display: 'flex', height: '100vh'}}>
        <div style={{flex:1,flexdirection:'column'}}>
        <img src="./images/loginimage.jpg" alt="login" style={{width:660,height:620}}></img>
        </div>
        <div className="loginform" style={{ flex: 1 ,flexdirection:'column',backgroundColor:'#e6e6fa', paddingLeft:70}}> 
        <h1>Dizzo</h1>
        <br></br>
        <h1>Welcome Back!</h1>  
        <br></br> 
        <div ></div>
        <h3>Username:</h3>
        <input type="email" placeholder="Username" id="user" style={{paddingLeft:10}}></input>
        <br></br>
        <h3>Password:</h3>
        <div>
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="pass"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            style={{paddingLeft:10}}
          />
          {errors.password && <div style={{color:"red"}}>{errors.password}</div>}
        </div>
        <br /><br />
        <button type="Submit" id="sub">Login</button>
        </div>
        </div>
        </form>
          </div>
      
    )
}