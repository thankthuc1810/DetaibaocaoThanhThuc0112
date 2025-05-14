package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
    
}
