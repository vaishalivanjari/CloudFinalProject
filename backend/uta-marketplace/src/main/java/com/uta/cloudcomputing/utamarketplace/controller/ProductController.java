package com.uta.cloudcomputing.utamarketplace.controller;

import com.uta.cloudcomputing.utamarketplace.entity.ProductsEntity;
import com.uta.cloudcomputing.utamarketplace.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

import com.uta.cloudcomputing.utamarketplace.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import com.uta.cloudcomputing.utamarketplace.entity.ProductEntity;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {
	@Autowired
	ProductsRepository pr;
	
	@GetMapping
	public List<ProductsEntity> getAllLogins(){
		Pageable limit = PageRequest.of(0,50);
		return (List<ProductsEntity>) pr.findAll(limit).toList();
	}

	@PostMapping
	public String saveProduct(@RequestBody ProductsEntity productsEntity){
		System.out.println(productsEntity.toString());
		String[] tok = productsEntity.getImagePath().split("folder%2F");
		String[] t = tok[1].split("generation");
		String url = "https://storage.cloud.google.com/productimagebucket1/New%20folder/" +t[0].substring(0, t[0].length()-1);
		productsEntity.setImagePath(url);
		try{
			Pageable limit = PageRequest.of(0,1, Sort.by(Sort.Direction.DESC,"productID"));
			Page<ProductsEntity> page = pr.findAll(limit);
			int productID = page.toList().get(0).getProductID()+1;
			productsEntity.setProductID(productID);
			System.out.println(productsEntity.toString());
			ProductsEntity res = pr.save(productsEntity);
			Optional<ProductsEntity> optRes = pr.findById(productID);
			System.out.println(optRes.get().getProductID());
			return res.getProductID()+"";
		}catch(Exception e){
			return e.getMessage();
		}

	}
}
