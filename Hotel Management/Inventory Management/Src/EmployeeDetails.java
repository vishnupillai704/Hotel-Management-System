package com.example.InventoryControlSystem;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="EmployeeDetails")
public class EmployeeDetails {
	@Transient
	 public static final String SEQUENCE_NAME = "user_sequence";
	
	
	public static String getSequenceName() {
		return SEQUENCE_NAME;
	}
	@Id
	private Integer id;
	private String employeeName;
	private String employeeAddress;
	private Long employeeSalary;
	private Integer employeeAge;
	private String occupation;
	private String employeeEmail;
	public EmployeeDetails() {
		
	}
	
	public EmployeeDetails(Integer id, String employeeName, String employeeAddress, Long employeeSalary,
			Integer employeeAge, String occupation, String employeeEmail) {
		super();
		this.id = id;
		this.employeeName = employeeName;
		this.employeeAddress = employeeAddress;
		this.employeeSalary = employeeSalary;
		this.employeeAge = employeeAge;
		this.occupation = occupation;
		this.employeeEmail = employeeEmail;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getEmployeeAddress() {
		return employeeAddress;
	}
	public void setEmployeeAddress(String employeeAddress) {
		this.employeeAddress = employeeAddress;
	}
	public Long getEmployeeSalary() {
		return employeeSalary;
	}
	public void setEmployeeSalary(Long employeeSalary) {
		this.employeeSalary = employeeSalary;
	}
	public Integer getEmployeeAge() {
		return employeeAge;
	}
	public void setEmployeeAge(Integer employeeAge) {
		this.employeeAge = employeeAge;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getEmployeeEmail() {
		return employeeEmail;
	}
	public void setEmployeeEmail(String employeeEmail) {
		this.employeeEmail = employeeEmail;
	}
	

}
