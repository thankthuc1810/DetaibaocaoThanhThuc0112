package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.Role;

public interface RoleRepository extends JpaRepository<Role,Long> {
    
}
