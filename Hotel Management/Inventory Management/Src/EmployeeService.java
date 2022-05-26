package com.example.InventoryControlSystem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeerepository;
	@Autowired
	private SequenceGeneratorService service;
	
	public List<EmployeeDetails>findAll(){
   	 return employeerepository.findAll();
    }
	
	public EmployeeDetails load( EmployeeDetails ord) {
 		ord.setId(service.getSequenceNumber(ord.SEQUENCE_NAME));
          return employeerepository.save(ord);
 	}
	
	public EmployeeDetails update( EmployeeDetails ord) {
 	    return employeerepository.save(ord);
 	}
	
	public void delete(@PathVariable Integer id) {
	     employeerepository.deleteById(id);
	}
    
}
