package com.example.GuestManagementMicroservice;

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
@RequestMapping("/Update")
public class Controller {
    
	@Autowired
	 private UpdateRepository updaterepository; 
	
	@RequestMapping(value="/allupdate")
	public List<CustomerUpdate>findAll(){
		return updaterepository.findAll();
	}
	
	@RequestMapping(value="/update",method=RequestMethod.PUT)
	public void update(@RequestBody CustomerUpdate ord) {
	     updaterepository.save(ord);
	}
	@RequestMapping(value="/delete/{employeeid}",method=RequestMethod.DELETE)
	public void delete(@PathVariable Long employeeid) {
	     updaterepository.deleteById(employeeid);
	}
	
}
