package com.example.RoomManagementMicroservice;

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
@RequestMapping("/RoomManagement")
public class RoomController {
	@Autowired
	private RoomRepository roomrepository;
	
	@RequestMapping("/RoomAll")
	public List<RoomDetails>FindALl(){
		return roomrepository.findAll();
	}
	@RequestMapping(value="/load",method=RequestMethod.POST)
	public RoomDetails load(@RequestBody RoomDetails ord) {
         return roomrepository.save(ord);

	}
	@RequestMapping(value="/Update",method=RequestMethod.PUT)
	public void update(@RequestBody RoomDetails ord) {
	     roomrepository.save(ord);
	}
	@RequestMapping(value="/delete/{id}",method=RequestMethod.DELETE)
	public void delete(@PathVariable Integer id) {
	     roomrepository.deleteById(id);
	}
}
