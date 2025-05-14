package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.Orders;

public interface OrdersRepository extends JpaRepository<Orders,Long> {
    
}
