package com.model.lab.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="acadamicdetails")
public class Acadamic {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int acadamicid;
     private String year;
     private String cgpa;
     private String areaofinterest;
     private String experience;
     private String  institution;
     private String degree;
     private String branch;
     private int projects;
     private int achievements;
     private String skills;
	public Acadamic(int acadamicid, String year, String cgpa, String areaofinterest, String experience,
			String institution, String degree, String branch, int projects, int achievements, String skills) {
		super();
		this.acadamicid = acadamicid;
		this.year = year;
		this.cgpa = cgpa;
		this.areaofinterest = areaofinterest;
		this.experience = experience;
		this.institution = institution;
		this.degree = degree;
		this.branch = branch;
		this.projects = projects;
		this.achievements = achievements;
		this.skills = skills;
	}
	public int getAcadamicid() {
		return acadamicid;
	}
	public void setAcadamicid(int acadamicid) {
		this.acadamicid = acadamicid;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getCgpa() {
		return cgpa;
	}
	public void setCgpa(String cgpa) {
		this.cgpa = cgpa;
	}
	public String getAreaofinterest() {
		return areaofinterest;
	}
	public void setAreaofinterest(String areaofinterest) {
		this.areaofinterest = areaofinterest;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getInstitution() {
		return institution;
	}
	public void setInstitution(String institution) {
		this.institution = institution;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public int getProjects() {
		return projects;
	}
	public void setProjects(int projects) {
		this.projects = projects;
	}
	public int getAchievements() {
		return achievements;
	}
	public void setAchievements(int achievements) {
		this.achievements = achievements;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public Acadamic() {
		
	}
}
