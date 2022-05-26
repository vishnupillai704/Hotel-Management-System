package com.example.RoomManagementMicroservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;



@Service
public class RoomService {
	@Autowired
	private RoomRepository roomrepository;
	@Autowired
	private SequenceGeneratorService service;
	
	
	public List<RoomDetails>FindAll(){
		return roomrepository.findAll();
	}
	
	public RoomDetails load( RoomDetails ord) {
		ord.setId(service.getSequenceNumber(ord.SEQUENCE_NAME));
         return roomrepository.save(ord);
	}
	
	public RoomDetails update( RoomDetails ord) {
	     return roomrepository.save(ord);
	}
	public void delete(@PathVariable Integer id) {
	     roomrepository.deleteById(id);
	}
}
