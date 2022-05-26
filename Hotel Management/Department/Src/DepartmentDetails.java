package com.example.DepartmentMicroservice;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="DepartmentDetails")
public class DepartmentDetails {
	@Transient
	 public static final String SEQUENCE_NAME = "user_sequence";
	
	
	public static String getSequenceName() {
		return SEQUENCE_NAME;
	}
	@Id
	private Integer id;
	private String departmentName;
	private Integer totalEmployees;
	private Long totalSalary;
	
	public DepartmentDetails() {
		
	}
	public DepartmentDetails(Integer id, String departmentName, Integer totalEmployees, Long totalSalary) {
		super();
		this.id = id;
		this.departmentName = departmentName;
		this.totalEmployees = totalEmployees;
		this.totalSalary = totalSalary;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public Integer getTotalEmployees() {
		return totalEmployees;
	}
	public void setTotalEmployees(Integer totalEmployees) {
		this.totalEmployees = totalEmployees;
	}
	public Long getTotalSalary() {
		return totalSalary;
	}
	public void setTotalSalary(Long totalSalary) {
		this.totalSalary = totalSalary;
	}
	

}
