package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Task;

@Repository
public interface taskRepository extends JpaRepository<Task, Long>{

	static Task saveTask(Task task) {
		// TODO Auto-generated method stub
		return null;
	}

	static void deleteTask(Long id) {
		// TODO Auto-generated method stub
		
	}

}
