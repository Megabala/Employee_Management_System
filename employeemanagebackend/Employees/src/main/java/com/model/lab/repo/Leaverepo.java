package com.model.lab.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.model.lab.entity.Leaveform;
public interface Leaverepo extends JpaRepository<Leaveform, Integer> {
	
}

