package com.uta.cloudcomputing.utamarketplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uta.cloudcomputing.utamarketplace.entity.UserEntity;
import com.uta.cloudcomputing.utamarketplace.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserRepository ur;
	
	@GetMapping
	public List<UserEntity> getAllUsers(){
		
		return (List<UserEntity>) ur.findAll();
	}
}
