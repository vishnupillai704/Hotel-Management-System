package com.example.GuestManagementMicroservice;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;


@Component
public interface UpdateRepository  extends  MongoRepository<CustomerUpdate, Integer> {

	void deleteById(Integer id);

	
}
