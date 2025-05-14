package com.nguyenthanhthuc.backend.service;


import com.nguyenthanhthuc.backend.entity.Gallery;
import java.util.List;


public interface GalleryService {
    public Gallery createGallery(Gallery gallery);
    public Gallery getGalleryById(Long galleryId);
    public List<Gallery> getAllGalleries();
    public Gallery updateGallery(Gallery gallery);
    public void deleteGallery(Long galleryId);
}
