package com.example.InventoryControlSystem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



import io.swagger.annotations.ApiOperation;




@CrossOrigin(origins ={"http://localhost:3001","http://localhost:3002","http://localhost:3000","http://localhost:3001/AddInventory"})
@RestController
@RequestMapping("/EmployeeManagement")
public class EmployeeController {
	@Autowired
	private EmployeeService service;
	
	@GetMapping("/all")
	@ApiOperation(value="Finds all Employee details",
	 notes="will get you all the details of Employees in hotel",
	 response=EmployeeDetails.class)	
	public List<EmployeeDetails>findAll(){
    	 return service.findAll();
     }
	
 	@PostMapping("/load")
 	@ApiOperation(value="Post all Employees details",
	 notes="will post details of employees in hotel",
	 response=EmployeeDetails.class)
 	public EmployeeDetails load(@RequestBody EmployeeDetails ord) {
 		return service.load(ord);
 	}
    
 	@PutMapping("/update")
 	@ApiOperation(value="Update Employees details",
	 notes="will Update details of employees in hotel",
	 response=EmployeeDetails.class)
 	public EmployeeDetails update(@RequestBody EmployeeDetails ord) {
 	    return service.update(ord);
 	}
    
 	@DeleteMapping("/delete/{id}")
 	public void delete(@PathVariable Integer id) {
 	     service.delete(id);
 	}
}
