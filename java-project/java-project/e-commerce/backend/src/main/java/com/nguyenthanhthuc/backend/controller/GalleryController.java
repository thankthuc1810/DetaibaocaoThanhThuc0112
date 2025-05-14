package com.nguyenthanhthuc.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthanhthuc.backend.entity.Gallery;
import com.nguyenthanhthuc.backend.service.GalleryService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@RequestMapping("api/galleries")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")

public class GalleryController {
     private GalleryService galleryService;
    //Create Gallery REST API
    @PostMapping
    public ResponseEntity<Gallery> createGallery(@RequestBody Gallery gallery){
        Gallery saveGallery = galleryService.createGallery(gallery);
        return new ResponseEntity<>(saveGallery,HttpStatus.CREATED);
    }

    //Get Gallery by id REST API
    // http://localhost:8000/api/galleries/1
    @GetMapping("{id}")
    public ResponseEntity<Gallery> getGalleryById(@PathVariable("id") Long galleryId){
        Gallery Gallery=galleryService.getGalleryById(galleryId);
        return new ResponseEntity<>(Gallery,HttpStatus.OK);
    }
    //Get Gallery REST API
    // http://localhost:8000/api/galleries
    @GetMapping
    public ResponseEntity<List<Gallery>> getAllGalleries(){
        List<Gallery> Galleries = galleryService.getAllGalleries();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range","item 0-" + Galleries.size() + "/" + Galleries.size());
        return  ResponseEntity.ok().headers(headers).body(Galleries);
    }
    //Update Gallery REST API
    @PutMapping("{id}")
    //http://localhost:8000/api/galleries/1
    public ResponseEntity<Gallery> updateGallery(@PathVariable("id") Long galleryId,
    @RequestBody Gallery Gallery){
        Gallery.setId(galleryId);
        Gallery updateGallery = galleryService.updateGallery(Gallery);
        return new ResponseEntity<>(updateGallery,HttpStatus.OK);
    }
    //Delete Gallery REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteGallery(@PathVariable("id") Long galleryId){
        galleryService.deleteGallery(galleryId);
        return new ResponseEntity<>("Gallery successfully deleted!", HttpStatus.OK);
    }
}
