package com.example.RoomManagementMicroservice;

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




@CrossOrigin(origins ={"http://localhost:3001","http://localhost:3000","http://localhost:3002"})
@RestController
@RequestMapping("/RoomManagement")
public class RoomController {
	@Autowired
	private RoomRepository roomrepository;
	@Autowired
	private SequenceGeneratorService service;

	@GetMapping("/RoomAll")
	@ApiOperation(value="Finds all Room details",
	 notes="will get you all the details of room in hotel",
	 response=RoomDetails.class)
	public List<RoomDetails>FindALl(){
		return roomrepository.findAll();
	}
	
	@PostMapping("/load")
	@ApiOperation(value="Post Room details",
	 notes="will post the details of room into database",
	 response=RoomDetails.class)
	public RoomDetails load(@RequestBody RoomDetails ord) {
		ord.setId(service.getSequenceNumber(ord.SEQUENCE_NAME));
         return roomrepository.save(ord);
	}
	
	@PutMapping("/Update")
	public void update(@RequestBody RoomDetails ord) {
	     roomrepository.save(ord);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable Integer id) {
	     roomrepository.deleteById(id);
	}
}
