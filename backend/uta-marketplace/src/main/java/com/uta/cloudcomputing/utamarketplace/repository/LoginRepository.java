package com.uta.cloudcomputing.utamarketplace.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.uta.cloudcomputing.utamarketplace.entity.LoginEntity;

@Repository
public interface LoginRepository extends CrudRepository<LoginEntity, Integer> {

}
