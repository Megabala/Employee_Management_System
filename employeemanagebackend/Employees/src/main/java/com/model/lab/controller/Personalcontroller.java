package com.model.lab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.lab.entity.Departments;
import com.model.lab.entity.General;
import com.model.lab.entity.Leaveform;
import com.model.lab.entity.Personal;
import com.model.lab.entity.Task;
import com.model.lab.service.Personalservice;
@RestController
@CrossOrigin("http://localhost:3000")
public class Personalcontroller {
	@Autowired
    private Personalservice personalservice;
	 @PostMapping("/")
	    public void addemployee(@RequestBody Personal personal ) {
	        personalservice.addemployee(personal);
	    }
	 @GetMapping("/")
	    public List<Personal> getemployee() {
	        return personalservice.getemployee();
	    }
     @GetMapping("/{deptname}")
	 
	    public List<Departments> getdeptemployee(@PathVariable String deptname) {
	        List<Departments> employeeDetailsList = personalservice.getdeptemployee(deptname);
	        return employeeDetailsList;
	    }
     @GetMapping("/employees/{employeeId}")
     public List<Object[]> getGeneralDetailsByEmployeeId(@PathVariable int employeeId) {
         return personalservice.findGeneralDetailsByEmployeeId(employeeId);
     }
     @GetMapping("/personal/{employeeId}")
     public List<Object[]> findPersonalDetailsByEmployeeId(@PathVariable int employeeId) {
         return personalservice.findPersonalDetailsByEmployeeId(employeeId);
     }
     @GetMapping("/contact/{employeeId}")
     public List<Object[]> findContactByEmployeeId(@PathVariable int employeeId) {
         return personalservice.findContactById(employeeId);
     }
     @GetMapping("/acadamic/{employeeId}")
     public List<Object[]> findAcadamicByEmployeeId(@PathVariable int employeeId) {
         return personalservice.findAcadamicById(employeeId);
     }
     @PutMapping("/edit")
     public String updateemployeeprofile(@RequestBody Personal personal) {
 		 return (personalservice.updateemployeeprofile(personal)) ? "Employeedetails updated successfully" : "Customer not updated";
     }
     @DeleteMapping("/delete/{id}")
     public void deleteemployeeid(@PathVariable int id) {
    	 personalservice.deleteemployeeid(id);
     }
     @PostMapping("/task")
	    public void addtask(@RequestBody Task task ) {
	        personalservice.addtask(task);
	    }
     @GetMapping("/taskget/{id}")
     public List<Task> gettask(@PathVariable int id) {
    	return personalservice.findtaskById(id);
     }
     @PostMapping("/leave")
     public void addleave(@RequestBody Leaveform leaveform ) {
	        personalservice.addleave(leaveform);
	    }
     @GetMapping("/leaveget")
     public List<Leaveform> getleave() {
    	return personalservice.getleave();
     }
     
	}

