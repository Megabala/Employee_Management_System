package com.model.lab.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name="personaldetails")
public class Personal {

		 @Id
		 private int employeeid;
         private String firstname;
         private String lastname;
         private String dateofbirth;
         private String gender;
         private String maritalstatus;
         private String emailid;
         private String password;
         public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		@OneToOne(cascade = CascadeType.ALL)
         @JoinColumn(name = "forcontactid")
         private Contact contact;
         @OneToOne(cascade = CascadeType.ALL)
         @JoinColumn(name = "forgeneralid")
         private General general;
         @OneToOne(cascade = CascadeType.ALL)
         @JoinColumn(name = "foracadamicid")
         private Acadamic acadamic;


         public Contact getContact() {
			return contact;
		}
		public void setContact(Contact contact) {
			this.contact = contact;
		}
		public Personal() {
		    }
        public Personal(int employeeid, String firstname, String lastname, String dateofbirth, String gender,String maritalstatus,String emailid,String password) {
		        this.employeeid=employeeid;
		        this.firstname=firstname;
		        this.dateofbirth=dateofbirth;
		        this.gender=gender;
		        this.maritalstatus=maritalstatus;
		        this.lastname=lastname;
		        this.emailid=emailid;
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
		public String getLastname() {
			return lastname;
		}
		public void setLastname(String lastname) {
			this.lastname = lastname;
		}
		public String getDateofbirth() {
			return dateofbirth;
		}
		public void setDateofbirth(String dateofbirth) {
			this.dateofbirth = dateofbirth;
		}
		public String getGender() {
			return gender;
		}
		public void setGender(String gender) {
			this.gender = gender;
		}
		public String getMaritalstatus() {
			return maritalstatus;
		}
		public void setMaritalstatus(String maritalstatus) {
			this.maritalstatus = maritalstatus;
		}
		public String getEmailid() {
			return emailid;
		}
		public void setEmailid(String emailid) {
			this.emailid = emailid;
		}
		public General getGeneral() {
			return general;
		}
		public void setGeneral(General general) {
			this.general = general;
		}
		public Acadamic getAcadamic() {
			return acadamic;
		}
		public void setAcadamic(Acadamic acadamic) {
			this.acadamic = acadamic;
		}
        
		
	}


