package com.example.InventoryControlSystem;

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
@RequestMapping("/EmployeeManagement")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeerepository;
     @RequestMapping(value="/all")
	public List<EmployeeDetails>findAll(){
    	 return employeerepository.findAll();
     }
 	@RequestMapping(value="/load",method=RequestMethod.POST)
 	public EmployeeDetails load(@RequestBody EmployeeDetails ord) {
          return employeerepository.save(ord);
 	}
    @RequestMapping(value="/update",method=RequestMethod.PUT)
 	public void update(@RequestBody EmployeeDetails ord) {
 	     employeerepository.save(ord);
 	}
 	@RequestMapping(value="/delete/{id}",method=RequestMethod.DELETE)
 	public void delete(@PathVariable Integer employeeid) {
 	     employeerepository.deleteById(employeeid);
 	}
}
