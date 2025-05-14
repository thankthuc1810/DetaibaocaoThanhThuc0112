package com.nguyenthanhthuc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenthanhthuc.backend.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery,Long> {
    
}
