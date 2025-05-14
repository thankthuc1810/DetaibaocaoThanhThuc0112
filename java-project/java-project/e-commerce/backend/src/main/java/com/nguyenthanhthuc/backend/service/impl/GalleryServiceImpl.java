package com.nguyenthanhthuc.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenthanhthuc.backend.entity.Gallery;
import com.nguyenthanhthuc.backend.service.GalleryService;
import com.nguyenthanhthuc.backend.repository.GalleryRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class GalleryServiceImpl implements GalleryService {

    private GalleryRepository galleryRepository;

    @Override
    public Gallery createGallery(Gallery gallery) {
       return galleryRepository.save(gallery);
    }

    @Override
    public Gallery getGalleryById(Long galleryId) {
        Optional<Gallery> optionalGallery = galleryRepository.findById(galleryId);
        return optionalGallery.get();
    }

    @Override
    public List<Gallery> getAllGalleries() {
        return galleryRepository.findAll();
    }

    @Override
    public Gallery updateGallery(Gallery gallery) {
        Gallery existingGallery = galleryRepository.findById(gallery.getId()).get();
        existingGallery.setThumbnail(gallery.getThumbnail());
        existingGallery.setProduct(gallery.getProduct());
        Gallery updateGallery = galleryRepository.save(existingGallery);
        return updateGallery;
    }

    @Override
    public void deleteGallery(Long galleryId) {
        galleryRepository.deleteById(galleryId);
    }
    
}
