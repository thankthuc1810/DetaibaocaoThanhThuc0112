package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    
}
