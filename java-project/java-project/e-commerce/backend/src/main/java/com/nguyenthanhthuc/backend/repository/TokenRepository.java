package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.Token;

public interface TokenRepository extends JpaRepository<Token,Long> {
    
}
