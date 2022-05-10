package com.example.practice.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/Booking")
public class Controller {
	@Autowired
    private BookingRepository bookingrepository;      
	
	@RequestMapping(value="/all")
	public List<Customer>findAll(){
		return bookingrepository.findAll();
	}
	@RequestMapping(value="/load",method=RequestMethod.POST)
	public Customer load(@RequestBody Customer ord) {
	bookingrepository.save(ord);
	return bookingrepository.findByName(ord.getName());
	}
	
	
	
}
