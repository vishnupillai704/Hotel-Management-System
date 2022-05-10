package com.example.InventoryControlSystem;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
@Component
public interface InventoryRepository extends  MongoRepository<InventoryDetails,Integer> {
	void deleteById(Integer day);
}
