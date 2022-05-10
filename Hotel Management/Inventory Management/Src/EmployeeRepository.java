package com.example.InventoryControlSystem;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
@Component
public interface EmployeeRepository extends  MongoRepository<EmployeeDetails,Integer>{
	void deleteById(Integer id);

}
