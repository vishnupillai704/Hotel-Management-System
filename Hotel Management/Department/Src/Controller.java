package com.example.DepartmentMicroservice;

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




@CrossOrigin(origins ="http://localhost:3002")
@RestController
@RequestMapping("/DepartmentDetails")
public class Controller {
	@Autowired
	private  DepartmentRepository departmentrepository;
	@Autowired
	private SequenceGeneratorService service;

	@GetMapping("/DepartmentAll")
	@ApiOperation(value="Finds all Department details",
	 notes="will get you all the details of Departments in hotel",
	 response=DepartmentDetails.class)
	public List<DepartmentDetails>FindALl(){
		return departmentrepository.findAll();
	}

	@PostMapping("/load")
	@ApiOperation(value="Post Department details",
	 notes="Post the details of Departments into DataBase",
	 response=DepartmentDetails.class)
	public DepartmentDetails load(@RequestBody DepartmentDetails ord) {
		ord.setId(service.getSequenceNumber(ord.SEQUENCE_NAME));
         return departmentrepository.save(ord);

	}
	
	@PutMapping("/Update")
	@ApiOperation(value="Update Department details",
	 notes="Update the details of Departments into DataBase",
	 response=DepartmentDetails.class)
	public void update(@RequestBody DepartmentDetails ord) {
	     departmentrepository.save(ord);
	}
	@DeleteMapping("/delete/{id}")
	@ApiOperation(value="Delete Department details",
	 notes="Delete the details of Departments into DataBase",
	 response=DepartmentDetails.class)
	public void delete(@PathVariable Integer id) {
	     departmentrepository.deleteById(id);
	}
	

}
