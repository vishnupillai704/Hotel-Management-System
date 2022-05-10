package com.example.RoomManagementMicroservice;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;


@Component
public interface RoomRepository extends  MongoRepository<RoomDetails, Integer> {

	void deleteById(Integer id);

}
