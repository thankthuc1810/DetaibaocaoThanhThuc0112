package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
}
