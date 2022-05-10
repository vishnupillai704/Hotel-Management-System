package com.example.DepartmentMicroservice;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

@Component
public interface DepartmentRepository extends  MongoRepository<DepartmentDetails,Integer>{
	void deleteById(Integer id);
}
