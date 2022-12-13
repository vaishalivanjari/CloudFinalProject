package com.uta.cloudcomputing.utamarketplace.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login")
public class LoginEntity implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="UTA_ID")
	private int userID;

	@Column(name="Password")
	private String userPassword;

	public int getUserID() {
		return userID;
	}

	@Override
	public String toString() {
		return "LoginEntity{" +
				"userID=" + userID +
				", userPassword='" + userPassword + '\'' +
				'}';
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
}
