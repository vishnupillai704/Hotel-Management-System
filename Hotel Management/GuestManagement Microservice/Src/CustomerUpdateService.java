package com.example.GuestManagementMicroservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


@Service
public class CustomerUpdateService {
	
	@Autowired
	 private UpdateRepository updaterepository; 
	@Autowired
	private SequenceGeneratorService service;
	
	public List<CustomerUpdate>findAll(){
		return updaterepository.findAll();
	}
	public CustomerUpdate update( CustomerUpdate ord) {
		ord.setiD(service.getSequenceNumber(ord.SEQUENCE_NAME));
	     return updaterepository.save(ord);
	}
	public void delete(@PathVariable Integer id) {
	     updaterepository.deleteById(id);
	}
	

}
