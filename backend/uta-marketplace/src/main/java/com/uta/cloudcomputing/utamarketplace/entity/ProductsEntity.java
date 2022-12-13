package com.uta.cloudcomputing.utamarketplace.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "products")
public class ProductsEntity implements Serializable {

    @Id
    @Column(name = "Product_ID")
    private int productID;

    @Column(name = "Product_Name")
    private String productName;

    @Override
    public String toString() {
        return "ProductsEntity{" +
                "productID=" + productID +
                ", productName='" + productName + '\'' +
                ", imagePath='" + imagePath + '\'' +
                ", price=" + price +
                ", productAvailability=" + productAvailability +
                ", productCategory='" + productCategory + '\'' +
                ", ownerName='" + ownerName + '\'' +
                ", rating=" + rating +
                '}';
    }

    @Column(name = "Image_Path")
    private String imagePath;

    @Column(name = "Price")
    private float price;

    @Column(name = "Availability")
    private int productAvailability;

    @Column(name = "Category")
    private String productCategory;

    @Column(name = "Owner_Name")
    private String ownerName;

    @Column(name = "Rating")
    private int rating;


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

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getProductAvailability() {
        return productAvailability;
    }

    public void setProductAvailability(int productAvailability) {
        this.productAvailability = productAvailability;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
