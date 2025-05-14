package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
    
}
