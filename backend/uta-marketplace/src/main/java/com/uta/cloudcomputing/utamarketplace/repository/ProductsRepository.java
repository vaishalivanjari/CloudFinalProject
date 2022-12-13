package com.uta.cloudcomputing.utamarketplace.repository;

import com.uta.cloudcomputing.utamarketplace.entity.ProductEntity;
import com.uta.cloudcomputing.utamarketplace.entity.ProductsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends JpaRepository<ProductsEntity, Integer> {
}
