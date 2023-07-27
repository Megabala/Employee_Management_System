package com.model.lab.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="leaveform")
public class Leaveform {
	 @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int leaveid;
     private String startdate;
     private String enddate;
     private String firstname;
     private String lastname;
     private String department;
     private String reason;
     private String  employeeid;
	public int getLeaveid() {
		return leaveid;
	}
	public void setLeaveid(int leaveid) {
		this.leaveid = leaveid;
	}
	public Leaveform(int leaveid, String startdate, String enddate, String firstname, String lastname,
			String department, String reason, String employeeid) {
		super();
		this.leaveid = leaveid;
		this.startdate = startdate;
		this.enddate = enddate;
		this.firstname = firstname;
		this.lastname = lastname;
		this.department = department;
		this.reason = reason;
		this.employeeid = employeeid;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(String employeeid) {
		this.employeeid = employeeid;
	}
	public Leaveform() {
		
	}
}
