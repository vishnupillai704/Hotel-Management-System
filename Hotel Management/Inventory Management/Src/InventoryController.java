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
@RequestMapping("/InventoryManagement")
public class InventoryController {
	@Autowired
	private InventoryRepository inventoryrepository;
	@RequestMapping(value="/all")
	public List<InventoryDetails> findAll(){
		return inventoryrepository.findAll();
	}
	@RequestMapping(value="/load",method=RequestMethod.POST)
 	public InventoryDetails load(@RequestBody InventoryDetails ord) {
          return inventoryrepository.save(ord);
 	}
	  @RequestMapping(value="/update",method=RequestMethod.PUT)
	 	public void update(@RequestBody InventoryDetails ord) {
	 	     inventoryrepository.save(ord);
	 	}
	 	@RequestMapping(value="/delete/{day}",method=RequestMethod.DELETE)
	 	public void delete(@PathVariable Integer day) {
	 	     inventoryrepository.deleteById(day);
	 	}

}
