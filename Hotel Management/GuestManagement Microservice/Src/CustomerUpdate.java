package com.example.GuestManagementMicroservice;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="CustomerUpdate")
public class CustomerUpdate {
	@Transient
	 public static final String SEQUENCE_NAME = "user_sequence";
	
	 public static String getSequenceName() {
		return SEQUENCE_NAME;
	}
	
	
	@Id
    private Integer iD;
	private String updatedname;
    private String updatedstatus;
    private String updatedcheckoutdate;
    private Integer updatedroomrate; 
    private Integer updatedroomNo;
	
	public Integer getiD() {
		return iD;
	}
	public void setiD(Integer iD) {
		this.iD = iD;
	}
	public String getUpdatedname() {
		return updatedname;
	}
	public void setUpdatedname(String updatedname) {
		this.updatedname = updatedname;
	}
	public String getUpdatedstatus() {
		return updatedstatus;
	}
	public void setUpdatedstatus(String updatedstatus) {
		this.updatedstatus = updatedstatus;
	}

	public String getUpdatedcheckoutdate() {
		return updatedcheckoutdate;
	}
	public void setUpdatedcheckoutdate(String updatedcheckoutdate) {
		this.updatedcheckoutdate = updatedcheckoutdate;
	}
	public Integer getUpdatedroomrate() {
		return updatedroomrate;
	}
	public void setUpdatedroomrate(Integer updatedroomrate) {
		this.updatedroomrate = updatedroomrate;
	}
	public Integer getUpdatedroomNo() {
		return updatedroomNo;
	}
	public void setUpdatedroomNo(Integer updatedroomNo) {
		this.updatedroomNo = updatedroomNo;
	}
    
}