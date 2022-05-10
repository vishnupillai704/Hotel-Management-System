package com.example.InventoryControlSystem;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="InventoryDetails")
public class InventoryDetails {
	@Id
	private Integer id;
	private Integer day;
	private String foods;
	private String drinks;
	private String linen;
	private String cleaningProducts;
	private Long totalCost ;
	
	public Long getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(Long totalCost) {
		this.totalCost = totalCost;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getDay() {
		return day;
	}
	public void setDay(Integer day) {
		this.day = day;
	}

	public String getFoods() {
		return foods;
	}
	public void setFoods(String foods) {
		this.foods = foods;
	}
	public String getDrinks() {
		return drinks;
	}
	public void setDrinks(String drinks) {
		this.drinks = drinks;
	}
	public String getLinen() {
		return linen;
	}
	public void setLinen(String linen) {
		this.linen = linen;
	}
	public String getCleaningProducts() {
		return cleaningProducts;
	}
	public void setCleaningProducts(String cleaningProducts) {
		this.cleaningProducts = cleaningProducts;
	}

}
