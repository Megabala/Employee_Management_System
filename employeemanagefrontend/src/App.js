import Homepage from "./Components/Homepage.js";
import Addemployee from "./Components/Addemployee.js";
import Departments from "./Components/Departments.js";
import Employee from "./Components/Employee.js";
 import EmployeeProfile from "./Components/Profilepage.js";
import Attendance1 from "./Components/Attendance1.js";
import Notification from "./Components/Notification.js";
import Employeehome from "./Components/Employeehome";
import Updateprofile from "./Components/Updateprofile";
import Leaveform from "./Components/Leaveform";
import Signup from "./Components/Signuppage";
import Login from "./Components/Login";
import Adminlogin from "./Components/Adminlogin";
import Profileemployee from "./Components/Profileemployee"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import FeedBack from './Components/Feedback';
import {useState} from "react";
import { Provider } from "react-redux";
import store from "./Components/store";
import Navigateswitch from "./Components/Navigateswitch";
function App() {
  const [deptname, setdept] = useState("");
  const[employeeid,setemployeeid]=useState(0);
  const[empid,setempid]=useState(0);

  console.log(empid);
  return (
  <div className="App">
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Navigateswitch/>}></Route>
  <Route path="/adminlogin" element={<Adminlogin/>}></Route>
  <Route path="/employeelogin" element={<Login setempid={setempid}/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/home" element={<Homepage/>}></Route>
  <Route path="/Addemployee" element={<Addemployee/>}></Route>
  <Route path="/Departments" element={<Departments setdept={setdept}/>}></Route>
  <Route path="/Employee" element={<Employee deptname={deptname} setemployeeid={setemployeeid}/>}></Route>
  <Route path="/Updateprofile" element={<Updateprofile/>}></Route>
  <Route path="/EmployeeProfile" element={<EmployeeProfile employeeid={employeeid}/>}></Route>
  <Route path="/Attendance" element={<Attendance1/>}></Route>
  <Route path="/Notification" element={<Notification/>}></Route>
  <Route path="/homeemployee" element={<Employeehome/>}></Route>
  <Route path="/profilepage" element={<Profileemployee empid={empid}/>}></Route>
  <Route path="/leaveform" element={<Leaveform/>}></Route>
  <Route path="/feedback" element={<FeedBack/>}></Route>
  </Routes>
  </BrowserRouter>
  </Provider>
   </div>
  
  
 
  );
}

export default App;
