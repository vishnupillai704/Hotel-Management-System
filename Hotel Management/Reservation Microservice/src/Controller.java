package com.example.practice.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import io.swagger.annotations.ApiOperation;



@CrossOrigin(origins ={"http://localhost:3000","http://localhost:3002","http://localhost:3000/addCustomer"})
@RestController
@RequestMapping("/Booking")
public class Controller {
	@Autowired
    private BookingRepository bookingrepository;     
	@Autowired
	private SequenceGeneratorService service;
	@Autowired
	RabbitMQSender rabbitMQSender;
 
	
	
	@GetMapping("/all")
	@ApiOperation(value="Finds all Customer details",
	 notes="will get you all the details of customer in hotel",
	 response=Customer.class)
	public List<Customer>findAll(){
		return bookingrepository.findAll();
	}
	
	@GetMapping("/payment")
	public String producer(@RequestParam("customerId") String customerId,@RequestParam("customerName") String customerName,@RequestParam("amount") String amount,@RequestParam("status") String status ) {
		Customer ord=new Customer();
		RabbitMqCustomer cus =new RabbitMqCustomer();
		cus.setId(service.getSequenceNumber(ord.SEQUENCE_NAME));
		cus.setCustomerId(customerId);
		cus.setCustomerName(customerName);
		cus.setAmount(amount);
		cus.setStatus(status);
		rabbitMQSender.send(cus);
		return "Message sent to the RabbitMQ JavaInUse Successfully";
		
	}
	
	
	@ApiOperation(value="will create details of new Customer in hotel",
			notes="will post all the details of customer to database",
			response=Customer.class)
    @PostMapping("/load")
	public Customer load(@RequestBody Customer ord) {
    ord.setId(service.getSequenceNumber(ord.SEQUENCE_NAME));		
	bookingrepository.save(ord);
	return bookingrepository.findByName(ord.getName());
	}
	
	
	@ApiOperation(value="helps in deleting customer details by id",
			notes="will delete Customer details according to id",
			response=Customer.class)
    @DeleteMapping("/delete/{id}")
	public void delete(@PathVariable Integer id) {
	     bookingrepository.deleteById(id);
	}
	
	
}
