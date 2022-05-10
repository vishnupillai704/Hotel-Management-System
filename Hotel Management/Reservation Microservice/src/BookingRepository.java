package com.example.practice.project.Controller;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;


@Component
public interface BookingRepository extends  MongoRepository<Customer, Integer>  {

	Customer findByName(String name);

}
