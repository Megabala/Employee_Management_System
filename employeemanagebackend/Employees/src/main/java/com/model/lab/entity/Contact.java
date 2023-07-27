package com.model.lab.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="contactdetails")
public class Contact {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int contactid;
     private String city;
     private String country;
     private String state;
     private String githublink ;
     private String linkedinlink;
     private String mobilenumber;
     private String pincode;
     public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public  Contact(  ) {
	    }
	public Contact(int contactid, String city, String country, String state, String githublink, String linkedinlink,
			String mobilenumber,String pincode) {
		super();
		this.contactid = contactid;
		this.city = city;
		this.country = country;
		this.state = state;
		this.githublink = githublink;
		this.linkedinlink = linkedinlink;
		this.mobilenumber = mobilenumber;
		this.pincode=pincode;
	}
	public int getContactid() {
		return contactid;
	}
	public void setContactid(int contactid) {
		this.contactid = contactid;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getGithublink() {
		return githublink;
	}
	public void setGithublink(String githublink) {
		this.githublink = githublink;
	}
	public String getLinkedinlink() {
		return linkedinlink;
	}
	public void setLinkedinlink(String linkedinlink) {
		this.linkedinlink = linkedinlink;
	}
	public String getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

}
 


