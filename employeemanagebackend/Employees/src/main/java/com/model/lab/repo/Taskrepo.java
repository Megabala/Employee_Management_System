package com.model.lab.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.model.lab.entity.Task;

public interface Taskrepo extends JpaRepository<Task, Integer> {
	@Query(value="SELECT * FROM task WHERE employeeid = ?1",nativeQuery=true)
	  List<Task> findtaskById(int id);         
}
