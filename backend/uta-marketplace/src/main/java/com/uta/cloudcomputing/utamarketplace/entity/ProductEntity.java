package com.uta.cloudcomputing.utamarketplace.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class ProductEntity implements Serializable{
	
	@Id
	@Column(name="Product_ID")
	private int productID;

	@Column(name="Product_Name")
	private String productName;

	@Column(name="Image_Path")
	private String imagePath;

	@Override
	public String toString() {
		return "ProductEntity{" +
				"productID=" + productID +
				", productName='" + productName + '\'' +
				", imagePath='" + imagePath + '\'' +
				", productCategory='" + productCategory + '\'' +
				", productAvailability='" + productAvailability + '\'' +
				", productPrice=" + productPrice +
				'}';
	}

	@Column(name="Category")
	private String productCategory;
	
	@Column(name="Availability")
	private String productAvailability;

	@Column(name="Price")
	private double productPrice;

	public int getProductID() {
		return productID;
	}

	public void setProductID(int productID) {
		this.productID = productID;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public String getProductAvailability() {
		return productAvailability;
	}

	public void setProductAvailability(String productAvailability) {
		this.productAvailability = productAvailability;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}
}
