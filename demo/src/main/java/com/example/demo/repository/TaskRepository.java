package com.example.demo.repository;

import com.example.demo.model.Task;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

	List<Task> getAllTasks();

	static Task updateTask(Long id, Task task) {
		// TODO Auto-generated method stub
		return null;
	}
}