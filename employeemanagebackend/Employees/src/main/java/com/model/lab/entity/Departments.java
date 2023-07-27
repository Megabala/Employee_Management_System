package com.model.lab.entity;

public class Departments {
	
	int employeeid;
	String firstname;
	public Departments(int employeeid, String firstname) {
		this.employeeid = employeeid;
		this.firstname = firstname;
	}
	public int getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public Departments(){
		
	}
}
