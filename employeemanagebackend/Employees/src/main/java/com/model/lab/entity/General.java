package com.model.lab.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="generaldetails")
public class General {
	public int getGeneralid() {
		return generalid;
	}
	public void setGeneralid(int generalid) {
		this.generalid = generalid;
	}
	public String getJoindate() {
		return joindate;
	}
	public void setJoindate(String joindate) {
		this.joindate = joindate;
	}
	public String getShifttime() {
		return shifttime;
	}
	public void setShifttime(String shifttime) {
		this.shifttime = shifttime;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getManager() {
		return manager;
	}
	public void setManager(String manager) {
		this.manager = manager;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public General(int generalid, String joindate, String shifttime, String department, String manager, String role,
			int salary) {
		super();
		this.generalid = generalid;
		this.joindate = joindate;
		this.shifttime = shifttime;
		this.department = department;
		this.manager = manager;
		this.role = role;
		this.salary = salary;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int generalid;
    private String joindate;
    private String shifttime;
    private String department;
    private String manager;
    private String role;
    private int salary;

public General() {
	
}}