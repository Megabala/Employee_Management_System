package com.model.lab.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.model.lab.repo.EmployeeRepo;
import com.model.lab.repo.Leaverepo;
import com.model.lab.repo.Taskrepo;
import com.model.lab.entity.Departments;
import com.model.lab.entity.General;
import com.model.lab.entity.Leaveform;
import com.model.lab.entity.Personal;
import com.model.lab.entity.Task;
@Service
public class Personalservice {
	 @Autowired
	 private EmployeeRepo employeerepo;
	 
	 @Autowired
	 private Taskrepo taskrepo;
	 
	 @Autowired
	 private Leaverepo leaverepo;
	
	 public void addemployee(Personal personal) {
	        employeerepo.save(personal);
	   }
	 public List<Personal> getemployee() {
	        return employeerepo.findAll();
	    }
	 

 public List<Departments> getdeptemployee(String deptname) {
List<Object[]> result = employeerepo.getEmployeeContainsName(deptname);
   
List<Departments> employeeDetailsList = new ArrayList<>();
for (Object[] row : result) {
	int employeeid = (int) row[0];
  String firstname = (String) row[1];
  Departments employeeDetails = new Departments(employeeid, firstname);
  employeeDetailsList.add(employeeDetails);
}
 return employeeDetailsList;

}
 public List<Object[]> findGeneralDetailsByEmployeeId(int employeeId) {
     return employeerepo.findGeneralDetailsByEmployeeId(employeeId);
 }
 public List<Object[]> findPersonalDetailsByEmployeeId(int employeeId) {
     return employeerepo.findNameGenderMaritalStatusById(employeeId);
 }
 public List<Object[]> findContactById(int employeeId) {
     return employeerepo.findContactById(employeeId);
 }

 public List<Object[]> findAcadamicById(int employeeId) {
     return employeerepo.findAcadamicById(employeeId);
 }
 public boolean updateemployeeprofile(Personal customer) {
		return (employeerepo.saveAndFlush(customer) != null) ? true : false;
	}
 public void deleteemployeeid(int id){
     employeerepo.deleteById(id);
 }
 public void addtask(Task task) {
	 taskrepo.save(task);
 }
 public List<Task> findtaskById(int employeeid) {
	 return taskrepo. findtaskById(employeeid);
 }
 public void addleave(Leaveform leaveform ) {
     leaverepo.save(leaveform);
 }

 public List<Leaveform> getleave() {
	return leaverepo.findAll();
 }

}

