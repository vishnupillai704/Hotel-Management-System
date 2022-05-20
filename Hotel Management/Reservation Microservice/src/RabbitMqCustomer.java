package com.example.practice.project.Controller;


import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


public class RabbitMqCustomer {
	   @Id
	   private Integer id;
       private String customerId;
       private String customerName;
       private String amount;
       private String  status;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "RabbitMqCustomer [id=" + id + ", customerId=" + customerId + ", customerName=" + customerName
				+ ", amount=" + amount + ", status=" + status + "]";
	}
	
       


       
	
	
       
}
