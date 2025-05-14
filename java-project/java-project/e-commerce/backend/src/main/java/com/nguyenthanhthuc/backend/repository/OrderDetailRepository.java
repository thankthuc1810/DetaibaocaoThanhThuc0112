package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail,Long> {
    
}
