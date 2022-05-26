package com.example.practice.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


@Service
public class CustomerService {
	
	@Autowired
    private BookingRepository bookingrepository;     
	@Autowired
	private SequenceGeneratorService service;
	
	
	public List<Customer>findAll(){
		return bookingrepository.findAll();
	}
	public Customer load( Customer ord) {
		ord.setId(service.getSequenceNumber(ord.SEQUENCE_NAME));		
	     return	bookingrepository.save(ord);
		}
	public void delete(@PathVariable Integer id) {
		bookingrepository.deleteById(id);
	}

}
