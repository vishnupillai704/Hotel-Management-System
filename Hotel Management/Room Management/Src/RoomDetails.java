package com.example.RoomManagementMicroservice;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="room")
public class RoomDetails {
	@Id
	private Integer id;
	private Integer roomNo;
	private String roomType;
	private Integer floorNo;
	private Integer noOfbeds;
    private Integer roomRate;
	public Integer getRoomRate() {
		return roomRate;
	}
	public void setRoomRate(Integer roomRate) {
		this.roomRate = roomRate;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(Integer roomNo) {
		this.roomNo = roomNo;
	}
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public Integer getFloorNo() {
		return floorNo;
	}
	public void setFloorNo(Integer floorNo) {
		this.floorNo = floorNo;
	}
	public Integer getNoOfbeds() {
		return noOfbeds;
	}
	public void setNoOfbeds(Integer noOfbeds) {
		this.noOfbeds = noOfbeds;
	}
	
	
}
