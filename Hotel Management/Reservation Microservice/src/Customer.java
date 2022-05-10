package com.example.practice.project.Controller;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="Customer")
public class Customer {
	@Id
    private Integer id;
	
	private String name;
    private Integer adults;   
    private String status;
    private Integer numberOfnights;
    private String email;
    private Long phonenumber;
    private String gender;
    private String address;
    private Integer checkindate;
    private Integer checkoutdate;
    private Integer roomrate;
	public Integer getRoomrate() {
		return roomrate;
	}
	public void setRoomrate(Integer roomrate) {
		this.roomrate = roomrate;
	}
	public Integer getCheckindate() {
		return checkindate;
	}
	public void setCheckindate(Integer checkindate) {
		this.checkindate = checkindate;
	}
	public Integer getCheckoutdate() {
		return checkoutdate;
	}
	public void setCheckoutdate(Integer checkoutdate) {
		this.checkoutdate = checkoutdate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public Long getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(Long phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Integer getAdults() {
		return adults;
	}
	public void setAdults(Integer adults) {
		this.adults = adults;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Integer getNumberOfnights() {
		return numberOfnights;
	}
	public void setNumberOfnights(Integer numberOfnights) {
		this.numberOfnights = numberOfnights;
	}
	
}
