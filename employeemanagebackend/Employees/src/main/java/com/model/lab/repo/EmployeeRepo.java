package com.model.lab.repo;

import org.springframework.stereotype.Repository;
import com.model.lab.entity.General;
import com.model.lab.entity.Personal;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface EmployeeRepo extends JpaRepository<Personal, Integer> {
	 @Query(value = "SELECT pd.employeeid, pd.firstname\r\n"
	 		+ "FROM personaldetails pd\r\n"
	 		+ "INNER JOIN generaldetails g ON pd.forgeneralid = g.generalid\r\n"
	 		+ "WHERE g.department = :deptname"
	 	, nativeQuery = true)
	    public List<Object[]> getEmployeeContainsName(String deptname);
	  @Query(value = "SELECT g.generalid, g.joindate, g.shifttime, g.department, g.manager, g.role, g.salary " +
	            "FROM personaldetails p " +
	            "INNER JOIN generaldetails g ON p.forgeneralid = g.generalid " +
	            "WHERE p.employeeid = :employeeId", nativeQuery = true)
	  public List<Object[]> findGeneralDetailsByEmployeeId(int employeeId);
	  @Query("SELECT p.firstname, p.lastname, p.gender, p.maritalstatus ,p.employeeid,p.dateofbirth FROM Personal p WHERE p.employeeid = :employeeid")
	  public  List<Object[]> findNameGenderMaritalStatusById(int employeeid);
	  @Query(value="Select c.city,c.country,c.githublink,c.linkedinlink,c.mobilenumber,c.pincode,c.state from personaldetails p INNER JOIN contactdetails c on p.forcontactid=c.contactid WHERE p.employeeid = :employeeId", nativeQuery = true)
	  public  List<Object[]> findContactById(int employeeId);
	  @Query(value="Select a.achievements,a.areaofinterest,a.branch,a.cgpa,a.degree,a.experience,a.institution,a.projects,a.skills,a.year from personaldetails p INNER JOIN acadamicdetails a on p.foracadamicid=a.acadamicid WHERE p.employeeid = :employeeId", nativeQuery = true)
	  public  List<Object[]> findAcadamicById(int employeeId);
	  
}
