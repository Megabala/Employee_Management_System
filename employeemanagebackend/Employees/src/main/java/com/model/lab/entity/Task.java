package com.model.lab.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="task")
public class Task {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int taskid;
     private String startdate;
     private String enddate;
     private String projectname;
     private int employeeid;
	public int getTaskid() {
		return taskid;
	}
	public void setTaskid(int taskid) {
		this.taskid = taskid;
	}
	public Task(int taskid, String startdate, String enddate, String projectname, int employeeid) {
		super();
		this.taskid = taskid;
		this.startdate = startdate;
		this.enddate = enddate;
		this.projectname = projectname;
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
	public String getProjectname() {
		return projectname;
	}
	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}
	public int getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}
	public Task() {
		
	}
     
    }
