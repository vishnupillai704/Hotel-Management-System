package com.example.DepartmentMicroservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


@Service
public class DepartmentService {
	@Autowired
	private  DepartmentRepository departmentrepository;
	@Autowired
	private SequenceGeneratorService service;
	
	public List<DepartmentDetails>FindAll(){
		return departmentrepository.findAll();
	}
	public DepartmentDetails load( DepartmentDetails ord) {
		ord.setId(service.getSequenceNumber(ord.SEQUENCE_NAME));
        return departmentrepository.save(ord);
	}
	public DepartmentDetails update( DepartmentDetails ord) {
	     return departmentrepository.save(ord);
	}
	
	public void delete(@PathVariable Integer id) {
	     departmentrepository.deleteById(id);
	}
	
}
