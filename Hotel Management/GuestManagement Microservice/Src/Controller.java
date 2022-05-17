package com.example.GuestManagementMicroservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



import io.swagger.annotations.ApiOperation;



@CrossOrigin(origins ={"http://localhost:3000","http://localhost:3002"})
@RestController
@RequestMapping("/Update")
public class Controller {
    
	@Autowired
	 private UpdateRepository updaterepository; 
	@Autowired
	private SequenceGeneratorService service;
	
	
	@ApiOperation(value="Finds all Updated Customer details",
	 notes="will get you all the updated details of customer in hotel",
	 response=CustomerUpdate.class)
	@GetMapping("/allupdate")
	public List<CustomerUpdate>findAll(){
		return updaterepository.findAll();
	}
	
	@ApiOperation(value="post the updated details to database",
			 notes="will send the updated details of customer to database",
			 response=CustomerUpdate.class)
	@PutMapping("/update")
	public void update(@RequestBody CustomerUpdate ord) {
		ord.setiD(service.getSequenceNumber(ord.SEQUENCE_NAME));
	     updaterepository.save(ord);
	}
	
	@ApiOperation(value="Delete updated Customer details by id",
			 notes="will delete the customer update by id",
			 response=CustomerUpdate.class)
    @DeleteMapping("/delete/{id}")
	public void delete(@PathVariable Integer id) {
	     updaterepository.deleteById(id);
	}
	
}
