package com.example.DepartmentMicroservice;

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
@RequestMapping("/DepartmentDetails")
public class Controller {
	@Autowired
	private  DepartmentRepository departmentrepository;
	
	@RequestMapping("/DepartmentAll")
	public List<DepartmentDetails>FindALl(){
		return departmentrepository.findAll();
	}
	@RequestMapping(value="/load",method=RequestMethod.POST)
	public DepartmentDetails load(@RequestBody DepartmentDetails ord) {
         return departmentrepository.save(ord);

	}
	@RequestMapping(value="/Update",method=RequestMethod.PUT)
	public void update(@RequestBody DepartmentDetails ord) {
	     departmentrepository.save(ord);
	}
	@RequestMapping(value="/delete/{id}",method=RequestMethod.DELETE)
	public void delete(@PathVariable Integer id) {
	     departmentrepository.deleteById(id);
	}
	

}
