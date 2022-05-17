package com.example.practice.project.Controller;


import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="Customer")
public class Customer {
	
	 @Transient
	 public static final String SEQUENCE_NAME = "user_sequence";
	
	 public static String getSequenceName() {
			return SEQUENCE_NAME;
		}
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
    private String checkindate;
    private String checkoutdate;
    private Integer roomrate;
    private Integer roomNo;
    
    public String getCheckindate() {
		return checkindate;
	}
	public void setCheckindate(String checkindate) {
		this.checkindate = checkindate;
	}
	public String getCheckoutdate() {
		return checkoutdate;
	}
	public void setCheckoutdate(String checkoutdate) {
		this.checkoutdate = checkoutdate;
	}
	
	public Integer getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(Integer roomNo) {
		this.roomNo = roomNo;
	}

	public Integer getRoomrate() {
		return roomrate;
	}
	public void setRoomrate(Integer roomrate) {
		this.roomrate = roomrate;
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
