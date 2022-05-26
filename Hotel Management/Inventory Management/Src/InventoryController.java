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
@CrossOrigin(origins ={"http://localhost:3001","http://localhost:3002","http://localhost:3000"})
@RestController
@RequestMapping("/InventoryManagement")
public class InventoryController {
	@Autowired
	private InventoryRepository inventoryrepository;
	
	@GetMapping("/all")
	@ApiOperation(value="Finds all Inventory details",
	 notes="will get you all the details of Inventories in hotel",
	 response=InventoryDetails.class)	
	public List<InventoryDetails> findAll(){
		return inventoryrepository.findAll();
	}
	@PostMapping("/load")
	@ApiOperation(value="Post Inventory details",
	 notes="Post the details of Inventories in hotel",
	 response=InventoryDetails.class)	
 	public InventoryDetails load(@RequestBody InventoryDetails ord) {
          return inventoryrepository.save(ord);
 	}
	  @PutMapping("/update")
	  @ApiOperation(value="Update Inventory details",
		 notes="Update the details of Inventories in hotel",
		 response=InventoryDetails.class)	
	 	public void update(@RequestBody InventoryDetails ord) {
	 	     inventoryrepository.save(ord);
	 	}
	  
	@DeleteMapping("/delete/{iD}")
	@ApiOperation(value="Delete Inventory details",
	 notes="Delete the details of Inventories in hotel",
	 response=InventoryDetails.class)	
	 	public void delete(@PathVariable Integer iD) {
	 	     inventoryrepository.deleteById(iD);
	 	}

}
