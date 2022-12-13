package com.uta.cloudcomputing.utamarketplace.controller;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.uta.cloudcomputing.utamarketplace.repository.LoginRepository;
import com.uta.cloudcomputing.utamarketplace.entity.LoginEntity;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LoginController {
	@Autowired
	LoginRepository lr;
	
	@GetMapping
	public List<LoginEntity> getAllLogins(){
		return (List<LoginEntity>) lr.findAll();
	}

	@PostMapping
	public boolean checkUser(@RequestBody LoginEntity loginEntity){
		try{
			System.out.println(loginEntity);
			Optional<LoginEntity> result = lr.findById(loginEntity.getUserID());
			if(result.isPresent()){
				System.out.println(result.get());
				return Objects.equals(result.get().getUserPassword(), loginEntity.getUserPassword());
			}else{
				return false;
			}
		}catch(Exception exeption){
			return false;
		}
	}
}
