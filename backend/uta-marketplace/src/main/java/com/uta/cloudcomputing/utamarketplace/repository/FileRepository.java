package com.uta.cloudcomputing.utamarketplace.repository;

import com.uta.cloudcomputing.utamarketplace.entity.InputFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<InputFile, Long> {
}
